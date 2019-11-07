import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MappingService } from './mapping.service';

describe('MappingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MappingService ]
    })
  });

  it('should be created', () => {
    const service: MappingService = TestBed.get(MappingService);
    expect(service).toBeTruthy();
  });
});
