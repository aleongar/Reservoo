import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesInfoComponent } from './restaurantes-info.component';

describe('RestaurantesInfoComponent', () => {
  let component: RestaurantesInfoComponent;
  let fixture: ComponentFixture<RestaurantesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
