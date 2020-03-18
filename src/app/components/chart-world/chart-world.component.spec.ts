import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWorldComponent } from './chart-world.component';

describe('ChartWorldComponent', () => {
  let component: ChartWorldComponent;
  let fixture: ComponentFixture<ChartWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
