import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefairsComponent } from './singlefairs.component';

describe('SinglefairsComponent', () => {
  let component: SinglefairsComponent;
  let fixture: ComponentFixture<SinglefairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
