import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OntologyService } from './ontology.service';

describe('OntologyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ OntologyService ]
    })
  });

  it('should be created', () => {
    const service: OntologyService = TestBed.get(OntologyService);
    expect(service).toBeTruthy();
  });
});
