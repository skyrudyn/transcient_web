import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BanquetServiceService } from '../../services/banquet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {
formError:any;
hotelId=localStorage.getItem('hotelId');
  constructor(private router:Router,private toastr:ToastrService,
              private service:BanquetServiceService) { }

  ngOnInit() {
    this.checkLoggedIn();
  }
  checkLoggedIn(){
    if(localStorage.getItem('hotelName') == null){
      this.router.navigate(['login'])
    }
  }
  addStaff(username,password,staffName,contactNumber,email){
    console.log("comes")
    this.formError = false;
    if(username == ""){
      this.toastr.error("Username cannot be empty","", { timeOut: 3000 });
      this.formError =true;
    }
     if(password == ""){
      this.toastr.error("Password cannot be empty","", { timeOut: 3000 });
      this.formError =true;
    }
    if(staffName == ""){
      this.toastr.error("Staff Name cannot be empty","", { timeOut: 3000 });
      this.formError =true;
    }
    if(contactNumber == ""){
      this.toastr.error("Contact Number cannot be empty","", { timeOut: 3000 });
      this.formError =true;
    }
    if(email == ""){
      this.toastr.error("Email cannot be empty","", { timeOut: 3000 });
      this.formError =true;
    } 
    if(!this.formError){
      let staffadd =    'username='+username+
                        '&password='+password+
                        '&staffName='+staffName+
                        '&contactNumber='+contactNumber+
                        '&email='+email+
                        '&hotelId='+this.hotelId+
                        '&user='+'2';
      this.service.register(staffadd).subscribe(res=>{
        if (res.successful) {
          this.toastr.success(res.message,"",{timeOut:3000})
          this.router.navigate(['dashboard']);
        }else{
          this.toastr.error(res.error,"",{timeOut:3000})
        }
        
      },error=>{
        this.toastr.error("Service temporarily not available...","",{timeOut:3000})
      })
    }
    }
}
