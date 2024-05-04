import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaadhamFormComponent } from './shaadham-form.component';

describe('ShaadhamFormComponent', () => {
  let component: ShaadhamFormComponent;
  let fixture: ComponentFixture<ShaadhamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShaadhamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShaadhamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
