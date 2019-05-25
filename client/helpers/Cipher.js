var RSAKey = require('react-native-rsa');

export default class Cipher {
    constructor() {
        this.rsa = new RSAKey();
        this.publicKey = null;
        this.privateKey = null;
    }

    static get BITS() { return 1024; }

    static get EXPONENT() { return '10001'; }

    generateKeyPair() {
        this.rsa.generate(Cipher.BITS, Cipher.EXPONENT);

        return {
            public: this.rsa.getPublicString(),
            private: this.rsa.getPrivateString(),
        };
    }

    setPublicKey(key) {
        this.publicKey = key;
        this.rsa.setPublicString(key);
    }

    setPrivateKey(key) { 
        this.privateKey = key;
        this.rsa.setPrivateString(key);
    }

    publicEncrypt(message) {
        const publicKeyNotSet = (this.publicKey === null);

        if (publicKeyNotSet) throw Error('Public key has not been set!');

        return this.rsa.encrypt(message);
    }

    privateDecrypt(message) {
        const privateKeyNotSet = this.privateKey === null;

        if (privateKeyNotSet) throw Error('Private key has not been set!');

        return this.rsa.decrypt(message);
    }
}