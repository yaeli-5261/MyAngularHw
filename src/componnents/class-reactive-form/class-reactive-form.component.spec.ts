import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReactiveFormComponent } from './class-reactive-form.component';

describe('ClassReactiveFormComponent', () => {
  let component: ClassReactiveFormComponent;
  let fixture: ComponentFixture<ClassReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
