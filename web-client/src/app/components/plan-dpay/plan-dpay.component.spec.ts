import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDpayComponent } from './plan-dpay.component';

describe('PlanDpayComponent', () => {
  let component: PlanDpayComponent;
  let fixture: ComponentFixture<PlanDpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
