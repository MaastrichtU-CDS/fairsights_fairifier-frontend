import { TestBed } from '@angular/core/testing';

import { ValidateMappingService } from './validate-mapping.service';

describe('ValidateMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateMappingService = TestBed.get(ValidateMappingService);
    expect(service).toBeTruthy();
  });
});
