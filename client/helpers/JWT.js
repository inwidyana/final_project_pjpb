import { jws } from 'jsrsasign';

const { JWS, IntDate } = jws;

export default class JWT {
    token = null;

    setPayload(_payload) {
        this._payload = _payload;
    }

    setSender(id) {
        this._sender = id;
    }

    setSenderKey(key) {
        this._senderKey = key;
    }

    sign() {
        this._throwIfRequiredFieldIsEmpty();

        this._addSenderIdentificationToPayload();
        
        this._addIssuedTimeToPayload();

        this.token = JWS.sign("HS256", this._header, this._payload, this._senderKey);

        this._setIat();
    }

    // Private fields.
    static _alg = 'HS256';
    static _typ = 'JWT';
    _header = { alg: JWT._alg, typ: JWT._typ };
    _sender = null;
    _payload = null;
    _senderKey = null;
    _iat = null;

    // Private methods.
    _setIat() {
        this._iat = IntDate.get('now');
    }

    _addSenderIdentificationToPayload() {
        this._payload.sender = this._sender;
    }

    _addIssuedTimeToPayload() {
        this._payload._iat = this._iat;
    }

    _throwIfRequiredFieldIsEmpty() {
        if (this._sender === null) {
            throw Error('Sender identification is not set!');
        }
        else if (this._senderKey === null) {
            throw Error('Sender key is not set!');
        }
        else if (this._payload === null) {
            throw Error('Payload is not set!');
        }
    }
}