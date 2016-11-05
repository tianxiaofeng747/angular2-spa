import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {HeroDetailComponent } from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {routing} from './app.routing';
import {DashboardComponent} from './dashboard.component';
import {HttpModule} from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HeroSearchComponent} from './hero-search.component';
import {HeroTestComponent} from './hero-test-component';
import './rxjs-extensions';
@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      routing
  ],
  declarations: [
      AppComponent,
      HeroDetailComponent,
      DashboardComponent,
      HeroesComponent,
      HeroSearchComponent,
      HeroTestComponent
  ],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
