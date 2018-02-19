import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import {LoginComponent} from './auth/login/login.component';
import {FileSystemComponent} from './home/file-system/file-system.component';
import {ProfileComponent} from './user/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileSystemComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
