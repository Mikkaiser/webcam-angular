import { WebcamImage } from 'ngx-webcam';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webcam-angular';
  webcamImage: WebcamImage | undefined;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;

    console.log(this.webcamImage.imageAsDataUrl);
  }
}
