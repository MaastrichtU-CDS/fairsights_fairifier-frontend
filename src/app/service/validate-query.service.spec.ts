import { TestBed } from '@angular/core/testing';

import { ValidateQueryService } from './validate-query.service';

describe('ValidateQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateQueryService = TestBed.get(ValidateQueryService);
    expect(service).toBeTruthy();
  });
});
