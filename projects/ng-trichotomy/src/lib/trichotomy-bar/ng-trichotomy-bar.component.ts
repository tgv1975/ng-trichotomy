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
        this._right = right !== undefined;
        this.isRight = this._right;
    }
    get right() { return this._right; }

    private _bottom: boolean;
    @Input()
    set bottom(bottom) {
        this._bottom = bottom !== undefined;
        this.isBottom = this._bottom;
    }
    get bottom() { return this._bottom; }

    private _overlay: 'vertical' | 'horizontal' | null;
    @Input()
    set overlay(overlay) {
        const temp = overlay && overlay.toLowerCase();
        switch (temp) {
            case 'vertical':
                this.isOverlayVertical = true;
                this.isOverlayHorizontal = false;
                break;

            case 'horizontal':
                this.isOverlayHorizontal = true;
                this.isOverlayVertical = false;
                break;

            case null:
                this.isOverlayHorizontal = false;
                this.isOverlayVertical = false;
                break;

            default:
                // tslint:disable-next-line:max-line-length
                throw new TypeError(`Trichotomy bar overlay property must be "vertical", "horizontal", or null. Received: ${temp}`);
        }

        this._overlay = temp;
    }

    @HostBinding('class.bottom') isBottom: boolean;
    @HostBinding('class.right') isRight: boolean;
    @HostBinding('class.overlay-vertical') isOverlayVertical: boolean;
    @HostBinding('class.overlay-horizontal') isOverlayHorizontal: boolean;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.selfCheck();
    }

    private selfCheck() {
        const parentName = this.el.nativeElement.parentNode.nodeName;

        if (parentName !== 'TRICHOTOMY') {
            throw new TypeError(`Trichotomy bar must be a direct child of a Trichotomy container. Current parent: ${parentName}`);
        }
    }

}
