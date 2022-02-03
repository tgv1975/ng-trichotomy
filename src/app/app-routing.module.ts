import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolyGrailComponent } from './holy-grail/holy-grail.component';
import { HeaderFooterOverlayComponent } from './header-footer-overlay/header-footer-overlay.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    {
        path: 'holy-grail',
        component: HolyGrailComponent
    },
    {
        path: 'header-footer-overlay',
        component: HeaderFooterOverlayComponent
    },
    {
        path: '',
        component: DemoComponent
    },
    {
        path: '**',
        component: DemoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
