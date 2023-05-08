import { TestBed } from '@angular/core/testing';

import { ResenasServiceService } from './resenas-service.service';

describe('ResenasServiceService', () => {
  let service: ResenasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
