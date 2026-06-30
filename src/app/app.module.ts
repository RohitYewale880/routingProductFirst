import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomeComponent } from './components/Home/home/home.component';
import { ProductComponent } from './components/Product/product/product.component';
import { UsersComponent } from './components/User/users/users.component';
import { FairsComponent } from './components/Fairs/fairs/fairs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SinglaproductComponent } from './components/Product/singlaproduct/singlaproduct.component';
import { ProductformComponent } from './components/Product/productform/productform.component';
import { GetconfirmComponent } from './components/getconfirm/getconfirm.component';
import { UserformComponent } from './components/User/users/userform/userform.component';
import { SingleuserComponent } from './components/User/users/singleuser/singleuser.component';
import { MatChipsModule } from '@angular/material/chips';
import { EmailDashComponent } from './components/Email/email-dash/email-dash.component';
import { FairscardComponent } from './components/Fairs/fairscard/fairscard.component';
import { SinglefairsComponent } from './components/Fairs/singlefairs/singlefairs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    UsersComponent,
    FairsComponent,
    SinglaproductComponent,
    ProductformComponent,
    GetconfirmComponent,
    UserformComponent,
    SingleuserComponent,
    EmailDashComponent,
    FairscardComponent,
    SinglefairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
