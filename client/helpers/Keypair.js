import Cipher from './Cipher';
import { AsyncStorage } from 'react-native';

storage = '@key';
async function _storeData(key, value) {
    try {
        await AsyncStorage.setItem(storage + ':' + key, value);
    } catch (error) {
        throw Error(error);
    }
}

async function _retrieveData(key) {
    try {
        const value = await AsyncStorage.getItem(storage + ':' + key);
        if (value !== null) {
            return value;
        }
    }
    catch (error) {
        throw Error(error);
    }
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