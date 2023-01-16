import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Matee-Saowanee';
  checkgo1 = false;
  checkgo2 = false;
  relation = ''
  studentsRef : any
  list : any
  comment = ''
  eventTime1 = false
  eventTime2 = false
  name = ''
  subname = ''
  count = ''
  constructor(private db: AngularFirestore, private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
      // this.db
      // .collection('list')
      // .snapshotChanges()
      // .subscribe((data) => {
      //   console.log(data)
      //   const list = data.map((e) => {
      //     let data = {
      //       id: e.payload.doc.id,
      //       ...(e.payload.doc.data() as object),
      //     };
      //     console.log(data)
      //     return data;
      //   });
      //   this.list = list;
      // });
      //  setTimeout(() => {
      //   console.log(this.list)
      //  }, 5000);
    }
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
        console.log(e)
      }
      add() {
        let list = {
          createDate: moment()
            .add(+543, 'year')
            .format('DD-MM-YYYY'),
          name: this.name,
          subname: this.subname,
          count: this.count,
          lastUpdate: moment()
            .add(+543, 'year')
            .format('DD-MM-YYYY'),
            event1 : `${this.eventTime1 ? 'งานพิธี' : ''}`,
            event2 : `${this.eventTime2 ? 'งานเลี้ยงฉลอง' : ''}`,
            acceptEvent : this.checkgo1 ? 'สะดวก' : 'ไม่สะดวก',
            relation : this.relation,
            comment : this.comment
        };
        this.db.collection('list').add(list);
        this.checkgo1 = false;
        this.checkgo2 = false;
        this.relation = '';
        this.comment = '';
        this.name = '',
        this.subname = ''
        this.count = ''
        this.eventTime1 = false
        this.eventTime2 = false
        this._snackBar.open('ขอบคุณที่มาบอกให้เรารู้', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    }
    