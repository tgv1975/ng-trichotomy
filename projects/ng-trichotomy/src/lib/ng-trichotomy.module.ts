import { NgModule } from '@angular/core';
import { NgTrichotomyComponent } from './trichotomy/ng-trichotomy.component';
import { NgTrichotomyBarComponent } from './trichotomy-bar/ng-trichotomy-bar.component';
import { NgTrichotomyCenterpieceComponent } from './trichotomy-centerpiece/ng-trichotomy-centerpiece.component';

@NgModule({
    declarations: [
        NgTrichotomyComponent,
        NgTrichotomyBarComponent,
        NgTrichotomyCenterpieceComponent
    ],
    imports: [
    ],
    exports: [
        NgTrichotomyComponent,
        NgTrichotomyBarComponent,
        NgTrichotomyCenterpieceComponent
    ]
})
export class NgTrichotomyModule { }
