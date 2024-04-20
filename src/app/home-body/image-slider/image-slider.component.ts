import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit{
  images: string[] = ['/assets/Event_Images/sliding_img_3.jpg', '/assets/Event_Images/sliding_img_3.jpg', '/assets/Event_Images/sliding_img_4.jpg'];
  currentIndex: number = 0;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
