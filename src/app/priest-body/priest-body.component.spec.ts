import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestBodyComponent } from './priest-body.component';

describe('PriestBodyComponent', () => {
  let component: PriestBodyComponent;
  let fixture: ComponentFixture<PriestBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriestBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriestBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
