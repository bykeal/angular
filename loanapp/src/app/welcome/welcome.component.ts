import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 Title: any = 2 * 3; // title : string ="welcome angular";
 uinput = 'mr pascal\'';
 imgUrl = '../../assets/iii.jpg';
 pixelWidth: any = 500;
  constructor() { }
  getTitle(): string {
    return 'Welcome';
  }
  ngOnInit() {
  }

}
