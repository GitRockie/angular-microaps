import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public qrCodeVal: string;
  public level: 'L'| 'M' | 'Q' | 'H';
  public width: number;


  constructor() {
    this.level = 'L';
    this.qrCodeVal = 'QR code string value';
    this.width = 200;
  }
 
  //Creamos data para QR
  data = [{
    'name': 'Agatha Harkness',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'Stan Lee'
  }]

  dataToString = JSON.stringify(this.data);

  

  updateLevel(newValue: "L" | "M" | "Q" | "H") {
    this.level = newValue;
  }

  updateQrInfo(newValue: string) {
    this.qrCodeVal = newValue;
  }

  updateWidth(newValue: number) {
    this.width = newValue;
  }



}
