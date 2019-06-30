var RSAKey = require('react-native-rsa');
import * as Crypto from 'expo-crypto';
import CryptoJS from 'crypto-js';

export default class Cipher {
    generateKeyPair() {
        this._rsa.generate(Cipher._BITS, Cipher._EXPONENT);

        return {
            public: this._rsa.getPublicString(),
            private: this._rsa.getPrivateString(),
        };
    }

    static async hash(message) {
        return Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            message
        );
    }

    setPublicKey(key) {
        this._privateKey = key;
        this._rsa.setPrivateString(key);
    }

    setPrivateKey(key) { 
        

        this._publicKey = key;
        this._rsa.setPublicString(key);
    }

    encrypt(message) {
        this._throwIfPublicKeyNotSet();

        return this._rsa.encrypt(message);
    }

    decrypt(message) {
        this._throwIfPrivateKeyNotSet();

        return this._rsa.decrypt(message);
    }

    _throwIfPrivateKeyNotSet() {
        const privateKeyNotSet = this._privateKey === null;

        if (privateKeyNotSet) throw Error('Private key has not been set!');
    }

    _throwIfPublicKeyNotSet() {
        const publicKeyNotSet = this._publicKey === null;

        if (publicKeyNotSet) throw Error('Public key has not been set!');
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