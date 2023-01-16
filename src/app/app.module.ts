import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { environment } from '../environments/environment';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [AppComponent, DashboardComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule,  AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, FormsModule, MaterialModule, BrowserAnimationsModule, HttpClientModule,NgxPrintModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
