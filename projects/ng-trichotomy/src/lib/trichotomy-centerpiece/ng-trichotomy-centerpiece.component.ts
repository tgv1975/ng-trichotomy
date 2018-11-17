import {
    Component,
    HostBinding,
    ElementRef,
    AfterViewInit

} from '@angular/core';

@Component({
    selector: 'trichotomy-centerpiece',
    templateUrl: 'ng-trichotomy-centerpiece.component.html'
})
export class NgTrichotomyCenterpieceComponent implements AfterViewInit {

    @HostBinding('class.centerpiece') isCenterpiece = true;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.selfCheck();
    }

    private selfCheck() {
        const parentName = this.el.nativeElement.parentNode.nodeName;

        if (parentName !== 'TRICHOTOMY') {
            throw new TypeError(`Trichotomy centerpiece must be a direct child of a Trichotomy container. Current parent: ${parentName}`);
        }
    }

}
