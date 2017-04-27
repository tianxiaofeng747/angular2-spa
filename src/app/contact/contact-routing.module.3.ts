import {NgModule}            from '@angular/core';
import {RouterModule}        from '@angular/router';

import {ContactComponent}    from './contact.component.3';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'dashboard/contact', component: ContactComponent}
    ])],
    exports: [RouterModule]
})
export class ContactRoutingModule {
}
