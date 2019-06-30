import Cipher from '../helpers/Cipher';

export default class Chat {
    _cipher = new Cipher();
    message = null;

    setReceiverPrivateKey(privateKey) {
        this._cipher.setPrivateKey(privateKey);

        return this;
    }

    setReceiverPublicKey(publicKey) {
        this._cipher.setPublicKey(publicKey);

        return this;
    }

    send() {
        // encrypted = this._cipher.encrypt(this.message);


    }
}