import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTrichotomyModule } from 'ng-trichotomy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
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
