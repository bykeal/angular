import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public myname: any = 'Austine';
  public username: any;
  public password: any;
  public arraydata: any;

  constructor() { }

  ngOnInit() {
  }
  showname() {
    this.arraydata = {' user': this.username, ' pass': this.password};
    console.log(this.arraydata);
  }


}
