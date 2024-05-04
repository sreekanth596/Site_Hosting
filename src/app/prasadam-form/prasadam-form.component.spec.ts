import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasadamFormComponent } from './prasadam-form.component';

describe('PrasadamFormComponent', () => {
  let component: PrasadamFormComponent;
  let fixture: ComponentFixture<PrasadamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrasadamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrasadamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
