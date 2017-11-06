import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
loggedIn:any;
hotelName:string= "Transient Servitor";
user:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.getLoggedIn();
  }

  getLoggedIn(){
    console.log(localStorage.getItem('hotelName'))
    if(localStorage.getItem('hotelName') != null){
      this.loggedIn = true;
      this.hotelName = localStorage.getItem('hotelName');
      console.log(this.hotelName)
    }else{
      this.loggedIn = false;
    }
    if(localStorage.getItem('user') == '1'){
      this.user = 1;
    }else if(localStorage.getItem('user') == '2'){
      this.user = 2;
    }
  }
  goto(num) {
    if (num == 1) {
      this.router.navigate(['dashboard']);
    } else if (num == 2) {
      this.router.navigate(['events']);
    } else if (num == 3) {
      this.router.navigate(['applications']);
    } else if (num == 4) {
      this.router.navigate(['rating']);
    }else if (num == 5) {
      this.router.navigate(['login']);
    } else if (num == 6) {
      this.router.navigate(['signup']);
    }else if (num == 7) {
      this.router.navigate(['about']);
    } else if (num == 8) {
      this.router.navigate(['contact']);
    }else if (num == 9) {
      this.router.navigate(['staff-management']);
    }
  }
}
