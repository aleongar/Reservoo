import { TestBed } from '@angular/core/testing';

import { ReservasResolverService } from './reservas-resolver.service';

describe('ReservasResolverService', () => {
  let service: ReservasResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
