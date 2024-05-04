import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevottiFormComponent } from './devotti-form.component';

describe('DevottiFormComponent', () => {
  let component: DevottiFormComponent;
  let fixture: ComponentFixture<DevottiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevottiFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevottiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
