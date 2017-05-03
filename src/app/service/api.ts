
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class Api {
    constructor( private http:Http){

    }
    post (params) {
        let url = params.url || '';
        const DEV_MODE = 0; // 0 本地 1远程
        if (DEV_MODE == 0) {
            url = 'assets/data/' + url + '.json';
            delete params.url;
        }
        return this.http.get(url,params).toPromise().then(response => response.json().data).catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}