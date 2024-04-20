import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as panchangamData from '../../assets/panchangam_data.json';

interface Panchangam {
  date: string;
  tithi: string;
  nakshtram: string;
  rahukalam: string;
  durmuhoortham?: string;
  durmuhoortham1?: string;
}

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {
  images: string[] = ['/assets/Event_Images/sliding_img_1.jpg', '/assets/Event_Images/sliding_img_2.jpg', '/assets/Event_Images/sliding_img_3.jpg', '/assets/Event_Images/sliding_img_4.jpg', '/assets/Event_Images/sliding_img_5.jpg'];
  currentIndex: number = 0;
  currentDate: string = '';
  currentDay: string = '';
  panchangam: Panchangam[] = [];
  currentPanchangam: Panchangam | undefined;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateCurrentDate();
    this.getCurrentDayName();
    this.startSlideShow();
    this.loadPanchangamData();
  }

  startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  updateCurrentDate() {
    const currentDateObj = new Date();
    this.currentDate = this.datePipe.transform(currentDateObj, 'yyyy-MM-dd') || '';
  }

  getCurrentDayName() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDateObj = new Date();
    this.currentDay = days[currentDateObj.getDay()];
  }
  getCurrentDay(): string {
    return this.currentDay;
  }

  loadPanchangamData() {
    this.panchangam = panchangamData.panchangam;
    this.currentPanchangam = this.panchangam.find(item => item.date === this.currentDate);
  }
}
