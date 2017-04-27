import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent}      from './component/hero.component';
import {DashboardComponent}      from './component/dashboard/dashboard.component';

import {HeroListComponent} from './component/hero-list/hero-list.component';
import {AuthComponent} from './component/auth/auth.component';
import {HeroDetailComponent} from "./component/hero-detail/hero-detail.component";


const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'auth', component: AuthComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path:'list',
                component: HeroListComponent
            },
            {
                path:'detail/:id',
                component: HeroDetailComponent
            },
            {
                path: 'heroadd', component: HeroComponent,
            }
        ]
    },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
