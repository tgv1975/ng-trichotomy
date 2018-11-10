import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrichotomyCenterpieceComponent } from './ng-trichotomy-centerpiece.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'trichotomy',
    template: '<ng-content></ng-content>'
})
class NgTrichotomyMockComponent { }

@Component({
    template: `
        <trichotomy>
            <trichotomy-centerpiece>
            </trichotomy-centerpiece>
        </trichotomy>
    `
})
class TestHostComponent { }

describe('NgTrichotomyCenterpieceComponent', () => {
    let testHost: TestHostComponent;
    let testFixture: ComponentFixture<TestHostComponent>;
    let component: NgTrichotomyCenterpieceComponent;
    let componentEl: Element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                NgTrichotomyMockComponent,
                NgTrichotomyCenterpieceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        testFixture = TestBed.createComponent(TestHostComponent);
        testHost = testFixture.componentInstance;
        component = testFixture.debugElement.query(By.directive(NgTrichotomyCenterpieceComponent)).componentInstance;
        componentEl = testFixture.nativeElement.querySelector('trichotomy-centerpiece');

        testFixture.detectChanges();
    });

    it('throws if created outside Trichotomy parent container', () => {
        const uncontainedComponentFixture = TestBed.createComponent(NgTrichotomyCenterpieceComponent);
        expect(() => uncontainedComponentFixture.detectChanges()).toThrowError(TypeError);
    });

    it('should create with no errors', () => {
        expect(component).toBeTruthy();
    });

    it('should have "centerpiece" CSS class', () => {
        expect(componentEl.className).toContain('centerpiece');
    });
});
