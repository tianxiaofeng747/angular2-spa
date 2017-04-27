import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {HeroFormComponent} from './component/hero-form/hero-form.component';
import {AppComponent} from './app.component';
import {HeroComponent} from './component/hero.component';
import {AppRoutingModule} from './app-routing.module';
import { HeroDetailComponentComponent } from './component/hero-detail-component/hero-detail-component.component';
import { HeroSonComponent } from './component/hero-son/hero-son.component';
import { HeroSon2Component } from './component/hero-son2/hero-son2.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { UserService }    from './service/user.service';
import {Api} from './service/api';

import { ContactModule }      from './contact/contact.module.3';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroFormComponent,
        HeroDetailComponentComponent,
        HeroSonComponent,
        HeroSon2Component,
        HeroListComponent
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
