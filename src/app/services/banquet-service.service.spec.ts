import { TestBed, inject } from '@angular/core/testing';

import { BanquetServiceService } from './banquet-service.service';

describe('BanquetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanquetServiceService]
    });
  });

  it('should be created', inject([BanquetServiceService], (service: BanquetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
