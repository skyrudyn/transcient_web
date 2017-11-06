import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
showLogout:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.checkLoggin();
  }
  checkLoggin(){
    if(localStorage.getItem('username') !==null){
      this.showLogout = true ;
    }else{
      this.showLogout = false;
    }
  }
  logout(){
    this.router.navigate(['logout']);
  }
}
