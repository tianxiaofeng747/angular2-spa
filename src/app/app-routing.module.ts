import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent}      from './component/hero.component';
import {HeroFormComponent}      from './component/hero-form/hero-form.component';
import {HeroDetailComponentComponent}      from './component/hero-detail-component/hero-detail-component.component';
import {HeroSonComponent}      from './component/hero-son/hero-son.component';
import {HeroSon2Component}      from './component/hero-son2/hero-son2.component';
import {HeroListComponent} from './component/hero-list/hero-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: HeroListComponent},
    {
        path: 'heroadd', component: HeroComponent,
        children: [
            {
                path:'test01',
                component: HeroSonComponent
            },
            {
                path:'test02',
                component: HeroSon2Component
            },
        ]
    },
    {path: 'herofrom', component: HeroFormComponent},
    {
        path: 'hero/detail/:id', component: HeroDetailComponentComponent,

    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
