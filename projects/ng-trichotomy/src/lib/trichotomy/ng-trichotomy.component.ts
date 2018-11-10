// tslint:disable:max-line-length
import {
    Component,
    HostBinding,
    Input,
    OnInit,
    AfterViewInit,
    ElementRef,
} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trichotomy',
    templateUrl: 'ng-trichotomy.component.html'
})
export class NgTrichotomyComponent implements OnInit, AfterViewInit {

    static DIRECTIONS = ['vertical', 'horizontal'];

    private _direction: string;
    @Input()
    set direction(direction) {
        direction = direction && direction.toLowerCase();

        this.validateDirectionThrow(direction);

        this._direction = direction;
        this.isVertical = direction === 'vertical';
        this.isHorizontal = direction === 'horizontal';
    }
    get direction() { return this._direction; }

    @HostBinding('class.trichotomy') isContainer = true;
    @HostBinding('class.vertical') isVertical;
    @HostBinding('class.horizontal') isHorizontal;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.validateDirectionThrow(this._direction);

    }

    ngAfterViewInit() {
        this.selfTest();
    }

    private selfTest() {
        const display = window.getComputedStyle(this.el.nativeElement).display;

        if (display !== 'flex') {
            throw new TypeError(`Trichotomy container must have display set to "flex", but it's "${display}". Make sure to load the trichotomy.css stylesheet in your application!`);
        };
    }

    private validateDirectionThrow(direction) {
        if (!NgTrichotomyComponent.DIRECTIONS.includes(direction)) {
            throw new TypeError(`Trichotomy container must be initialized with a "direction" attribute, either 'vertical' or 'horizontal'. Received: ${direction}.`);
        }
    }

}
