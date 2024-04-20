import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBodyComponent } from './gallery-body.component';

describe('GalleryBodyComponent', () => {
  let component: GalleryBodyComponent;
  let fixture: ComponentFixture<GalleryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
