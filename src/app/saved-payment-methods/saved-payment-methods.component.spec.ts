import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPaymentMethodsComponent } from './saved-payment-methods.component';

describe('SavedPaymentMethodsComponent', () => {
  let component: SavedPaymentMethodsComponent;
  let fixture: ComponentFixture<SavedPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedPaymentMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
