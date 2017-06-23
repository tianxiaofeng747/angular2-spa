
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class Api {
    constructor( private http:Http){

    }
    post (params) {
        let url = params.url || '';
        const DEV_MODE:Boolean = true; // true 本地 false远程
        if (DEV_MODE) {
            url = 'assets/data/' + url + '.json';
            delete params.url;
            return this.http.get(url,params).toPromise().then(response => response.json().data).catch(this.handleError);
        }else{
            let headers = new Headers({ 'Content-Type': 'application/json' , apiName: url});
            let options = new RequestOptions({ headers: headers });
            delete params.url;
            url = 'gateway/call' ;
            return this.http.post(url,params,options).toPromise().then(response => response.json().data).catch(this.handleError);
        }

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}