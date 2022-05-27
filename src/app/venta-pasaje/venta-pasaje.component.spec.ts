import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPasajeComponent } from './venta-pasaje.component';

describe('VentaPasajeComponent', () => {
  let component: VentaPasajeComponent;
  let fixture: ComponentFixture<VentaPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPasajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
