import { TestBed } from '@angular/core/testing';

import { ReservasRestaurantesResolverService } from './reservas-restaurantes-resolver.service';

describe('ReservasRestaurantesResolverService', () => {
  let service: ReservasRestaurantesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasRestaurantesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
