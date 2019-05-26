var RSAKey = require('react-native-_rsa');

export default class Cipher {
    generateKeyPair() {
        this._rsa.generate(Cipher._BITS, Cipher._EXPONENT);

        return {
            public: this._rsa.getPublicString(),
            private: this._rsa.getPrivateString(),
        };
    }

    setPublicKey(key) {
        this._publicKey = key;
        this._rsa.setPublicString(key);
    }

    setPrivateKey(key) { 
        this._privateKey = key;
        this._rsa.setPrivateString(key);
    }

    publicEncrypt(message) {
        const publicKeyNotSet = (this._publicKey === null);

        if (publicKeyNotSet) throw Error('Public key has not been set!');

        return this._rsa.encrypt(message);
    }

    privateDecrypt(message) {
        const privateKeyNotSet = this._privateKey === null;

        if (privateKeyNotSet) throw Error('Private key has not been set!');

        return this._rsa.decrypt(message);
    }

    // Private fields.
    static _BITS = 1024;
    static _EXPONENT = '10001';
    _rsa = new RSAKey();
    _publicKey = null;
    _privateKey = null;

    // Private methods.
    //
}