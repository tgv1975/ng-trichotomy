import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTrichotomyModule } from 'ng-trichotomy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterOverlayComponent } from './header-footer-overlay/header-footer-overlay.component';
import { HolyGrailComponent } from './holy-grail/holy-grail.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderFooterOverlayComponent,
        HolyGrailComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgTrichotomyModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
