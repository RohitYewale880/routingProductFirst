import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglaproductComponent } from './singlaproduct.component';

describe('SinglaproductComponent', () => {
  let component: SinglaproductComponent;
  let fixture: ComponentFixture<SinglaproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglaproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglaproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
