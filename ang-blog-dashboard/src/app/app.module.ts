import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire/compat';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {environment} from 'src/environments/environment.development';
import {CategoriesComponent} from './categories/categories.component';
import {FormsModule} from "@angular/forms";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './auth/login/login.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
