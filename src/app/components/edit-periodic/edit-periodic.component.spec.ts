import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeriodicComponent } from './edit-periodic.component';

describe('EditPeriodicComponent', () => {
  let component: EditPeriodicComponent;
  let fixture: ComponentFixture<EditPeriodicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPeriodicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPeriodicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
