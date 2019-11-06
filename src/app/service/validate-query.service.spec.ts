import { TestBed } from '@angular/core/testing';

import { ValidateService } from './validate-query.service';

describe('ValidateQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateService = TestBed.get(ValidateQueryService);
    expect(service).toBeTruthy();
  });
});
