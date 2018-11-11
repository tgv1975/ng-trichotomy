import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrichotomyBarComponent } from './ng-trichotomy-bar.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trichotomy',
    template: '<ng-content></ng-content>'
})
class NgTrichotomyMockComponent { }

@Component({
    template: `
        <trichotomy>
            <trichotomy-bar>
            </trichotomy-bar>
        </trichotomy>
    `
})
class TestHostComponent { }

describe('NgTrichotomyBarComponent', () => {
    let testHost: TestHostComponent;
    let testFixture: ComponentFixture<TestHostComponent>;
    let component: NgTrichotomyBarComponent;
    let componentEl: Element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                NgTrichotomyMockComponent,
                NgTrichotomyBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        testFixture = TestBed.createComponent(TestHostComponent);
        testHost = testFixture.componentInstance;
        component = testFixture.debugElement.query(By.directive(NgTrichotomyBarComponent)).componentInstance;
        componentEl = testFixture.nativeElement.querySelector('trichotomy-bar');

        testFixture.detectChanges();
    });

    it('throws if created outside Trichotomy parent container', () => {
        const uncontainedComponentFixture = TestBed.createComponent(NgTrichotomyBarComponent);
        expect(() => uncontainedComponentFixture.detectChanges()).toThrowError(TypeError);
    });

    it('should create with no errors', () => {
        expect(component).toBeTruthy();
    });

    it('should not have "right" CSS class', () => {
        expect(componentEl.className).not.toContain('right');
    });

    it('should have "right" CSS class if "right" property is set', () => {

        component.right = true;

        testFixture.detectChanges();

        expect(componentEl.className).toContain('right');
    });

    it('should not have "bottom" CSS class', () => {
        expect(componentEl.className).not.toContain('bottom');
    });

    it('should have "bottom" CSS class if "bottom" property is set', () => {

        component.bottom = true;

        testFixture.detectChanges();

        expect(componentEl.className).toContain('bottom');
    });

    it('should have no overlay CSS class if no "overlay" property is set', () => {

        testFixture.detectChanges();

        expect(componentEl.className).not.toContain('overlay-');
    });

    it('should have "overlay-vertical" CSS class if "overlay" property is set to "vertical"', () => {

        component.overlay = 'vertical';

        testFixture.detectChanges();

        expect(componentEl.className).toContain('overlay-vertical');
        expect(componentEl.className).not.toContain('overlay-horizontal');
    });

    it('should have "overlay-horizontal" CSS class if "overlay" property is set to "horizontal"', () => {

        component.overlay = 'horizontal';

        testFixture.detectChanges();

        expect(componentEl.className).toContain('overlay-horizontal');
        expect(componentEl.className).not.toContain('overlay-vertical');
    });

    it('should throw if "overlay" property is invalid (neither "vertical", "horizontal", or null)', () => {
        expect(() => component.overlay = 'diagonal').toThrowError(TypeError);
    });

    it('unsetting the "overlay" property should remove overlay-* class', () => {

        component.overlay = 'horizontal';

        testFixture.detectChanges();

        expect(componentEl.className).toContain('overlay-horizontal');

        component.overlay = null;

        testFixture.detectChanges();

        expect(componentEl.className).not.toContain('overlay-');
    });
});
