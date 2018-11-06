import {
    Component,
    HostBinding,
    Input,
    OnInit
} from '@angular/core';
import { StringifyOptions } from 'querystring';
import { TouchSequence } from 'selenium-webdriver';
import { noop } from '@angular/compiler/src/render3/view/util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trichotomy-bar',
    templateUrl: 'ng-trichotomy-bar.component.html'
})
export class NgTrichotomyBarComponent implements OnInit {

    private _right: boolean;
    @Input()
    set right(right) {
        this._right = right;
        this.isRight = right;
    }
    get right() { return this._right; }

    @HostBinding('class.right') isRight;

    constructor() { }

    ngOnInit() {
    }

}
