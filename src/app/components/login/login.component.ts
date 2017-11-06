import { Component, OnInit } from '@angular/core';
import { BanquetServiceService } from '../../services/banquet-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  err = false;
  errMessage = "Error while logging in...";

  constructor(private service: BanquetServiceService,private router:Router,private toastr: ToastrService) {
    
   }

  ngOnInit() {
    localStorage.clear();
  }

  onLoggedin(u, p) {
    if(u != '' || p != ''){
    let userCredential = { 'username': u, 'password': p };
    this.service.login(userCredential).subscribe(res => {
      if (res.successful && res.user == 1) {
        this.toastr.success("Logging in...","", { timeOut: 3000 });
        localStorage.setItem('username', res.username)
        localStorage.setItem('hotelName', res.hotelName)
        localStorage.setItem('hotelId', res.hotelId)
        localStorage.setItem('userEmail', res.userEmail)
        localStorage.setItem('contactNumber', res.contactNumber)
        localStorage.setItem('user', res.user);
        this.router.navigate(['dashboard']);
        location.reload(false)

      } else if (res.successful && res.user == 2) {
        this.toastr.success("Logging in...","", { timeOut: 3000 });
        localStorage.setItem('username', res.username)
        localStorage.setItem('hotelName', res.hotelName)
        localStorage.setItem('hotelId', res.hotelId)
        localStorage.setItem('userEmail', res.userEmail)
        localStorage.setItem('contactNumber', res.contactNumber)
        localStorage.setItem('staffId', res.staffId)
        localStorage.setItem('user', res.user);
        this.router.navigate(['dashboard']);
        location.reload(false)

      }
      else {
        this.toastr.error(res.error,"", { timeOut: 3000 });
      }
    },error=>{
      this.toastr.error("Service temporarily not available","", { timeOut: 3000 });
    });
  }else{
    this.toastr.error("Empty/Invalid username and password","", { timeOut: 3000 });
  }
  }
}
