import { TestBed } from '@angular/core/testing';

import { RoleGserviceGuard } from './role-gservice.guard';

describe('RoleGserviceGuard', () => {
  let guard: RoleGserviceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleGserviceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
