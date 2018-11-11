import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyGrailComponent } from './holy-grail.component';

describe('HolyGrailComponent', () => {
  let component: HolyGrailComponent;
  let fixture: ComponentFixture<HolyGrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolyGrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyGrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
