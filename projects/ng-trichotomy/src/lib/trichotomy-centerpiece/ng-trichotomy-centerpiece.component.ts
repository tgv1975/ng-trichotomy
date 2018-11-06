import {
    Component,
    HostBinding,
    Input,
    OnInit
} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trichotomy-centerpiece',
    templateUrl: 'ng-trichotomy-centerpiece.component.html'
})
export class NgTrichotomyCenterpieceComponent implements OnInit {

    @HostBinding('class') cssClass = 'centerpiece';

    constructor() { }

    ngOnInit() {
    }

}
