import Cipher from '../helpers/Cipher';

function encryptMessage(message) {
    // withPublicKey = ;
}

export default class Chat {
    _cipher = new Cipher();
    message = null;

    setSenderPrivateKey(privateKey) {
        this._cipher.setPrivateKey(privateKey);

        return this;
    }

    setReceiverPublicKey(publicKey) {
        this._cipher.setPublicKey(publicKey);

        return this;
    }
}