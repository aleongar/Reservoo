import { TestBed } from '@angular/core/testing';

import { RestaurantByIdResolverService } from './restaurant-by-id-resolver.service';

describe('RestaurantByIdResolverService', () => {
  let service: RestaurantByIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantByIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
