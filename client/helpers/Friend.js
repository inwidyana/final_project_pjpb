import { AsyncStorage } from 'react-native';

storage = '@friends';
nextIdKey = 'nextId';

function _getDataKey(key) { return String(storage + ':' + String(key)); }

async function _incrementNextId() {
    return new Promise((resolve, reject) => {
        _getNextId().then(nextId => {
            incrementCounter = AsyncStorage.setItem(_getDataKey(nextIdKey), String(++nextId));

            incrementCounter.then(() => resolve());

            incrementCounter.catch((error) => reject(error));
        });
    });
}

async function _getNextId() {
    return new Promise((resolve, reject) => {
        retrieveData = AsyncStorage.getItem(_getDataKey(nextIdKey))

        retrieveData.then(nextId => {
            notYetSet = (nextId === null);

            if (notYetSet) { resolve(1); }
            else { resolve(Number(nextId)); }
        })

        retrieveData.catch(error => reject(error));
    });
}

function _friendJSONToObject(friendJSON) {
    friend = JSON.parse(friendJSON);

    friend = new Friend(friend.id, friend.name, friend.publicKey);

    return friend;
}

export default class Friend {
    constructor(id, name, publicKey) {
        this.id = id;
        this.name = name;
        this.publicKey = publicKey;
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            retrieveFriendData = AsyncStorage.getItem(_getDataKey(id))
            
            retrieveFriendData.then(friendData => {
                if (friendData !== null) {
                    friend = _friendJSONToObject(friendData);

                    resolve(friend);
                }
                else {
                    reject('Friend with specified ID not found');
                }
            });

            retrieveFriendData.catch(error => {
                reject(error);
            });
        });
    }

    static forEach(callback) {
        _getNextId().then(nextId => {
            let keys = [];
            
            for (let i = 1; i < nextId; i++) { 
                keys.push(_getDataKey(i)); 
            }

            AsyncStorage.multiGet(keys, (error, result) => {
                result.forEach(friendData => {
                    if (friendData !== null) {
                        friend = _friendJSONToObject(friendData[1]);

                        callback(friend);
                    }
                })
            });
        });
    }

    static addByKey(key) {
        return new Friend(null, null, key);
    }

    setName(name) {
        this.name = name;

        return this;
    }

    save() {
        if (this.name !== null && this.publicKey !== null) {
            return new Promise((resolve, reject) => {
                _getNextId().then(id => {
                    this.id = id;

                    newFriendData = JSON.stringify(this);

                    _incrementNextId();

                    AsyncStorage.setItem(_getDataKey(id), newFriendData).then(() => resolve(this));
                });
            });
        }
        else { throw Error('Name and public key has not been set!'); }
    }
}