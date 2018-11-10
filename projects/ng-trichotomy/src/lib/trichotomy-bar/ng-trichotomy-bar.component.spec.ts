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
});
