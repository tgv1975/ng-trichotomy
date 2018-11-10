import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrichotomyComponent } from './ng-trichotomy.component';

describe('NgTrichotomyComponent', () => {
    let component: NgTrichotomyComponent;
    let fixture: ComponentFixture<NgTrichotomyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgTrichotomyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgTrichotomyComponent);
        component = fixture.componentInstance;

        component.direction = 'horizontal';

        fixture.detectChanges();
    });

    it('throws if CSS display property is not "flex"', () => {
        const badFixture = TestBed.createComponent(NgTrichotomyComponent);
        const hostEl = badFixture.nativeElement;

        hostEl.style.display = 'block';

        expect(() => badFixture.detectChanges()).toThrowError(TypeError);
    });

    it('throws if no direction is provided', () => {
        const badFixture = TestBed.createComponent(NgTrichotomyComponent);
        expect(() => badFixture.detectChanges()).toThrowError(TypeError);
    });

    it('throws if bad direction is provided', () => {
        const badFixture = TestBed.createComponent(NgTrichotomyComponent);

        // only 'horizontal' and 'vertical' are valid
        expect(() => component.direction = 'diagonal').toThrowError(TypeError);
        expect(() => badFixture.detectChanges()).toThrowError(TypeError);
    });

    it('should get created without errors', () => {
        expect(component).toBeTruthy();
    });

    it('should have "trichotomy horizontal" CSS class when initialized with direction "horizontal"', () => {
        const hostEl = fixture.nativeElement;
        expect(hostEl.className).toContain('trichotomy horizontal');
    });

    it('should set host class to "trichotomy vertical" on direction set to "vertical"', () => {
        const hostEl = fixture.nativeElement;
        component.direction = 'vertical';

        fixture.detectChanges();

        expect(hostEl.className).toContain('trichotomy vertical');
    });

    it('should set host class to "trichotomy horizontal" on direction set to "horizontal"', () => {
        const hostEl = fixture.nativeElement;
        component.direction = 'horizontal';

        fixture.detectChanges();

        expect(hostEl.className).toContain('trichotomy horizontal');
    });
});
