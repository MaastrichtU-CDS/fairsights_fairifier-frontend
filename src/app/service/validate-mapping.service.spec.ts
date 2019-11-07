import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ValidateMappingService } from './validate-mapping.service';

describe('ValidateMappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ValidateMappingService ]
    })
  });
  
  it('should be created', () => {
    const service: ValidateMappingService = TestBed.get(ValidateMappingService);
    expect(service).toBeTruthy();
  });
});
