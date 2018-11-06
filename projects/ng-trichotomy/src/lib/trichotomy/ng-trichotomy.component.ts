import {
    Component,
    HostBinding,
    Input,
    OnInit,
    AfterViewChecked
} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trichotomy',
    templateUrl: 'ng-trichotomy.component.html'
})
export class NgTrichotomyComponent implements OnInit {

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

    @HostBinding('class.trichotomy') true;
    @HostBinding('class.vertical') isVertical;
    @HostBinding('class.horizontal') isHorizontal;

    constructor() { }

    ngOnInit() {
        this.validateDirectionThrow(this._direction);
    }

    private validateDirectionThrow(direction) {
        if (!NgTrichotomyComponent.DIRECTIONS.includes(direction)) {
            // tslint:disable-next-line:max-line-length
            throw new TypeError(`Trichotomy container must be initialized with a "direction" attribute, either 'vertical' or 'horizontal'. Received: ${direction}.`);
        }
    }
}
