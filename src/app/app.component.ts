import { Component } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Matee-Saowanee';
  checkgo1 = false;
  checkgo2 = false;
  relation = 0;
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  location() {
    window.location.href = 'https://goo.gl/maps/HLqcQd5ToKuGkXbo7';
    return false;
  }
  checkgofunc1() {
    this.checkgo1 = !this.checkgo1;
    if (this.checkgo1) {
      this.checkgo2 = false;
    }
  }
  checkgofunc2() {
    this.checkgo2 = !this.checkgo2;
    if (this.checkgo2) {
      this.checkgo1 = false;
    }
  }
  checkrelation(e: any) {
    this.relation = e;
  }
}
