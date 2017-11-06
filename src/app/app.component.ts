import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hide:boolean=false;
  constructor(private router:Router,private location: Location){}
  ngOnInit() {
    // this.checkCurrentPage();
  }
  // checkCurrentPage() {
  //   if(location.pathname == "/login"){
  //     this.hide = true
  //   }else if(location.pathname == "/signup"){
  //     this.hide = true
  //   }else if(location.pathname == "/"){
  //     this.hide = true
  //   }else{
  //     this.hide = false
  //   }
  // }


}
