import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {HeroDetailComponent } from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {routing} from './app.routing';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      routing
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      DashboardComponent,
      HeroesComponent
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
