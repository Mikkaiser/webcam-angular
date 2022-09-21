import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [AppComponent, CameraComponent],
  imports: [BrowserModule, WebcamModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
