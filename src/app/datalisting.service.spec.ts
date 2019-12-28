import { TestBed } from '@angular/core/testing';

import { DatalistingService } from './datalisting.service';

describe('DatalistingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatalistingService = TestBed.get(DatalistingService);
    expect(service).toBeTruthy();
  });
});
