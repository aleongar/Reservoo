import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCienteComponent } from './registro-ciente.component';

describe('RegistroCienteComponent', () => {
  let component: RegistroCienteComponent;
  let fixture: ComponentFixture<RegistroCienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
