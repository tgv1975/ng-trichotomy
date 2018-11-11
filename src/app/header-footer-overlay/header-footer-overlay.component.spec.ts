import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterOverlayComponent } from './header-footer-overlay.component';

describe('HeaderFooterOverlayComponent', () => {
  let component: HeaderFooterOverlayComponent;
  let fixture: ComponentFixture<HeaderFooterOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFooterOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFooterOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
