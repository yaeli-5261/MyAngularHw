import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromationPopupComponent } from './infromation-popup.component';

describe('InfromationPopupComponent', () => {
  let component: InfromationPopupComponent;
  let fixture: ComponentFixture<InfromationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfromationPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfromationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
