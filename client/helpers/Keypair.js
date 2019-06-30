import Cipher from './Cipher';
import { AsyncStorage } from 'react-native';

storage = '@keys';

function _getDataKey(key) {
    return (storage + ':' + key);
}

async function _storeData(key, value) {
    return AsyncStorage.setItem(_getDataKey(key), value);
}

async function _retrieveData(key) {
    return AsyncStorage.getItem(_getDataKey(key));
}

function _storePublicKey(key) { _storeData('public', key); }
function _storePrivateKey(key) { _storeData('private', key); }

export default class Keypair {
    publicKey = null;
    privateKey = null;

    constructor(publicKey, privateKey) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    static generate() {
        key = (new Cipher()).generateKeyPair();

        return new Keypair(key.public, key.private);
    }

    static retrievePublicKey() { return _retrieveData('public'); }
    static retrievePrivateKey() { return _retrieveData('private'); }

    store() {
        if (this.publicKey === null && this.privateKey === null) {
            throw Error('Public and private key from Key Pair has not been set!');
        }

        _storePublicKey(this.publicKey);
        _storePrivateKey(this.privateKey);
    }
}