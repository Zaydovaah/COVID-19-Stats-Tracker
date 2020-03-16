import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCasesComponent } from './global-cases.component';

describe('GlobalCasesComponent', () => {
  let component: GlobalCasesComponent;
  let fixture: ComponentFixture<GlobalCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
