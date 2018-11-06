import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrichotomyCenterpieceComponent } from './ng-trichotomy-centerpiece.component';

describe('NgTrichotomyCenterpieceComponent', () => {
    let component: NgTrichotomyCenterpieceComponent;
    let fixture: ComponentFixture<NgTrichotomyCenterpieceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgTrichotomyCenterpieceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgTrichotomyCenterpieceComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create with no errors', () => {
        expect(component).toBeTruthy();
    });

});
