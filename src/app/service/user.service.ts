import {Injectable} from '@angular/core';
import {Api} from '../service/api';

@Injectable()
/** Dummy version of an authenticated user service */
export class UserService {
    userName = '';
    User = {};

    constructor(private $api: Api) {
    }

    //登录
    login(msg) {
        return new Promise((resolve, reject) => {
            this.$api.post({
                url: 'api.auth.login',
                name: msg.name,
                password: msg.password
            }).then((result) => {
                this.User = result;
                resolve(result);
            }, (err) => {
                reject(err);
            });
        });

    }
}
