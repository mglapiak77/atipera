import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicsComponent } from './periodics.component';

describe('PeriodicsComponent', () => {
  let component: PeriodicsComponent;
  let fixture: ComponentFixture<PeriodicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
