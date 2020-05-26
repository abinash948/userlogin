import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdisplayComponent } from './mapdisplay.component';

describe('MapdisplayComponent', () => {
  let component: MapdisplayComponent;
  let fixture: ComponentFixture<MapdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
