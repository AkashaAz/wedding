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
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: any
  constructor(private db: AngularFirestore, private _snackBar: MatSnackBar,private http : HttpClient
  ) { }
  ngOnInit(): void {
    this.db
      .collection('list')
      .snapshotChanges()
      .subscribe((data) => {
        const list = data.map((e) => {
          let data = {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as object),
          };
          return data;
        });
        this.list = list;
      });
    setTimeout(() => {
      const url = 'http://localhost:4200/admin/dashboard'// e.g localhost:3000 + "/download?access_token=" + "sample access token";
      this.http.get(url).subscribe(
        (response : any) => { // download file
          console.log(response)
          var blob = new Blob([response.blob()], { type: 'application/pdf' });
          const blobUrl = URL.createObjectURL(blob);
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = blobUrl;
          document.body.appendChild(iframe);
          if (iframe.contentWindow) {
            iframe.contentWindow.print();
          }
        });
      console.log(this.list)
    }, 5000);
  }
}
