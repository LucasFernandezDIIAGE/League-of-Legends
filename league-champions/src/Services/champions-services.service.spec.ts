import { TestBed } from '@angular/core/testing';

import { ChampionsServicesService } from './champions-services.service';

describe('ChampionsServicesService', () => {
  let service: ChampionsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
