import { TestBed } from '@angular/core/testing';

import { RestaurantExploreService } from './restaurant-explore.service';

describe('RestaurantExploreService', () => {
  let service: RestaurantExploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantExploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
