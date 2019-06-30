import { AsyncStorage } from 'react-native';

storage = '@token';

export default class Token {
    constructor(token) {
        this.token = token;
    }

    static async retrieve() {
        return AsyncStorage.getItem(storage);
    }

    async store() {
        if (this.token === null || this.token === undefined) {
            throw Error('Invalid token value');
        }

        return AsyncStorage.setItem(storage, this.token);
    }
}