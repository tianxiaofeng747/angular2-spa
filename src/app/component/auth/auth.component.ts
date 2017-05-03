import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService} from '../../service/user.service';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.less']
})


export class AuthComponent implements OnInit {

    constructor(private userServer:UserService,private router:Router) {
    }

    ngOnInit() {
    }
    model:any  = {
        name:'yuchenxing',
        password:'123456'
    };
    onSubmit() {
        if(!this.model.name || !this.model.password){
            return;
        }
        this.userServer.login(this.model).then((result) => {
            this.router.navigate(['/dashboard']);
        })
    }

}
