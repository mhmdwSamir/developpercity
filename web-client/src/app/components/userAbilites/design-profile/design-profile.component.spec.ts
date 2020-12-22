import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProfileComponent } from './design-profile.component';

describe('DesignProfileComponent', () => {
  let component: DesignProfileComponent;
  let fixture: ComponentFixture<DesignProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
