import { TestBed } from '@angular/core/testing';

import { GetDatabaseService } from './get-database.service';

describe('GetDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDatabaseService = TestBed.get(GetDatabaseService);
    expect(service).toBeTruthy();
  });
});
