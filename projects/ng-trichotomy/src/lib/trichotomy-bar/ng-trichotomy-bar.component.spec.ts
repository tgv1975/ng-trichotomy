import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrichotomyBarComponent } from './ng-trichotomy-bar.component';

describe('NgTrichotomyBarComponent', () => {
    let component: NgTrichotomyBarComponent;
    let fixture: ComponentFixture<NgTrichotomyBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgTrichotomyBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgTrichotomyBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create with no errors', () => {
        expect(component).toBeTruthy();
    });

    it('should not have "right" CSS class', () => {
        const hostEl = fixture.nativeElement;
        expect(hostEl.className).not.toContain('right');
    });

    it('should have "right" CSS class if "right" property is set', () => {
        const hostEl = fixture.nativeElement;

        component.right = true;

        fixture.detectChanges();

        expect(hostEl.className).toContain('right');
    });

    // it('should set host class property to "trichotomy vertical" on direction set to "vertical"', () => {
    //     const hostEl = fixture.nativeElement;
    //     component.direction = 'vertical';

    //     fixture.detectChanges();

    //     expect(hostEl.className).toEqual('trichotomy vertical');
    // });
});
