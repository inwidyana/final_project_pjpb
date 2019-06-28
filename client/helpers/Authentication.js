import Constant from '../helpers/Constant';

class Authentication {
    email = null;
    password = null;
    token = null;
    requestOptions = {
        method: 'POST',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
    }

    static API_URL = Constant.server.url;

    setEmail(email) { this.email = email; }
    setPassword(password) { this.password = password; }
    setToken(token) { this.token = token; }

    emailIsNull() {
        return (this.email === null);
    }

    passwordIsNull() {
        return (this.password === null);
    }
}

export class Login extends Authentication {
    static API_URL = super.API_URL + '/login';

    send() {
        return new Promise((resolve, reject) => {
            if (this.emailIsNull() || this.passwordIsNull()) { reject('A field is not set') }

            this.requestOptions.body = JSON.stringify({
                email: this.email,
                password: this.password,
            });

            fetch(Login.API_URL, this.requestOptions)
                .then(res => {
                    if (res.ok) {
                        resolve({
                            email: this.email,
                            password: this.password,
                            token: res._bodyText,
                        });
                    }

                    reject(res.status);
                })
                .catch(err => reject(err));
        });
    }
}

export class Registration extends Authentication {
    name = null;
    static API_URL = super.API_URL + '/register';

    setName(name) { this.name = name; }

    nameIsNull() {
        return (this.name === null);
    }

    send() {
        return new Promise((resolve, reject) => {
            if (this.emailIsNull() || this.nameIsNull() || this.passwordIsNull()) { reject('A field is not set') }

            this.requestOptions.body = JSON.stringify({
                email: this.email,
                password: this.password,
                name: this.name,
            });

            fetch(Registration.API_URL, this.requestOptions)
                .then(res => {
                    if (res.ok) {
                        resolve({
                            email: this.email,
                            password: this.password,
                            token: res._bodyText,
                        });
                    }

                    reject(res.status);
                })
                .catch(err => reject(err));
        });
    }
}