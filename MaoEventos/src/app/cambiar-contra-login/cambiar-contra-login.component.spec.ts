import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContraLoginComponent } from './cambiar-contra-login.component';

describe('CambiarContraLoginComponent', () => {
  let component: CambiarContraLoginComponent;
  let fixture: ComponentFixture<CambiarContraLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiarContraLoginComponent]
    });
    fixture = TestBed.createComponent(CambiarContraLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
