import {
    Component,
    HostBinding,
    Input,
    ElementRef,
    AfterViewInit
} from '@angular/core';

@Component({
    selector: 'trichotomy-bar',
    templateUrl: 'ng-trichotomy-bar.component.html'
})
export class NgTrichotomyBarComponent implements AfterViewInit {

    private _right: boolean;
    @Input()
    set right(right) {
        this._right = right;
        this.isRight = right;
    }
    get right() { return this._right; }

    @HostBinding('class.right') isRight;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.selfCheck();
    }

    private selfCheck() {
        const parentName = this.el.nativeElement.parentNode.nodeName;

        if (parentName !== 'TRICHOTOMY') {
            throw new TypeError(`Trichotomy bar must be a direct child of a Trichotomy container. Current parent: ${parentName}.`);
        }
    }

}
