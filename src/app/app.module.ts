import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {HeroComponent} from './component/hero/hero.component';
import {AppRoutingModule} from './app-routing.module';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { UserService }    from './service/user.service';
import {Api} from './service/api';

import { AuthComponent } from './component/auth/auth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroSonComponent } from './component/hero-son/hero-son.component';
import { DeroRelativeComponent } from './component/dero-relative/dero-relative.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroListComponent,
        AuthComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSonComponent,
        DeroRelativeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
