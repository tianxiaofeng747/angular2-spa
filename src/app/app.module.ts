import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {HeroComponent} from './component/hero.component';
import {AppRoutingModule} from './app-routing.module';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { UserService }    from './service/user.service';
import {Api} from './service/api';

import { ContactModule }      from './contact/contact.module.3';
import { AuthComponent } from './component/auth/auth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroListComponent,
        AuthComponent,
        DashboardComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        ContactModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        Api,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
