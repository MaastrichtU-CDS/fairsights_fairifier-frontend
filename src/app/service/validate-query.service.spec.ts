import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ValidateQueryService } from './validate-query.service';

describe('ValidateQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ValidateQueryService ]
    })
  });
  
  it('should be created', () => {
    const service: ValidateQueryService = TestBed.get(ValidateQueryService);
    expect(service).toBeTruthy();
  });
});
