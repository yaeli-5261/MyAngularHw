import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailesComponent } from './student-detailes.component';

describe('StudentDetailesComponent', () => {
  let component: StudentDetailesComponent;
  let fixture: ComponentFixture<StudentDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
