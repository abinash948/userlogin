import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerinfoComponent } from './markerinfo.component';

describe('MarkerinfoComponent', () => {
  let component: MarkerinfoComponent;
  let fixture: ComponentFixture<MarkerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
