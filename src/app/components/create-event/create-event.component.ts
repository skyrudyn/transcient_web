import { Component, OnInit } from '@angular/core';
import { BanquetServiceService } from '../../services/banquet-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  formError: any;
  male:any
  female:any
  mixed:any
  eventTypes:any=[];
  staff:any=[];
  participantTypes:any=[];
  createdBy=localStorage.getItem('username')
  constructor(private router: Router,
    private service: BanquetServiceService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.checkLoggin();
    this.service.getType().subscribe(res=>{
    this.eventTypes=res; 
    })
    this.service.getStaff(localStorage.getItem('hotelId')).subscribe(res=>{
    this.staff =res
    })
    this.service.getParticipantType().subscribe(res=>{
      this.participantTypes = res;
      })
  }
  checkLoggin(){
    if(localStorage.getItem('username') == null){
      this.router.navigate(['login'])
    }
  }

  change(n){
    if(n == 1){
      this.male = true;
      this.female = false;
      this.mixed = false;
    }else if(n == 2){
      this.male = false;
      this.female = true;
      this.mixed = false;
    }else if(n == 3){
      this.male = true;
      this.female = true;
      this.mixed = false;
    }else if(n == 4){
      this.male = false;
      this.female = false;
      this.mixed = true;
    }
  }
  create(eventName, eventLocation, eventDate,
    eventTime, payType, payRate,
    eventDesc, eventType, participantType,
    male, female, mixed,assignTo) {
      console.log(payType)
    this.formError = false;
    if (eventName == "") {
      this.toastr.error("Event Name cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (eventLocation == "") {
      this.toastr.error("Event Location cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (eventDate == "") {
      this.toastr.error("Event Date cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (eventTime == "") {
      this.toastr.error("Event Time cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (payType == "") {
      this.toastr.error("Pay Type cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (payRate == "") {
      this.toastr.error("Pay Rate cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (eventDesc == "") {
      this.toastr.error("Event Description cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (eventType == "") {
      this.toastr.error("Please choose Event Type", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (participantType == "") {
      this.toastr.error("Please choose Participant Type", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (male == "" && (participantType == 3 || participantType == 1)) {
      this.toastr.error("Male participant number cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (female == "" && (participantType == 3 || participantType == 2)) {
      this.toastr.error("Female participant number cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (mixed == "" && participantType == 4) {
      this.toastr.error("Mixed pariticipant number cannot be empty", "", { timeOut: 3000 });
      this.formError = true;
    }
    if (assignTo == "") {
      this.toastr.error("Please assign event to a staff", "", { timeOut: 3000 });
      this.formError = true;
    }
   
    if(!this.formError){
      let eventForm  =  'eventName='+eventName+
                        '&eventLocation='+eventLocation+
                        '&eventDate='+eventDate+
                        '&eventTime='+eventTime+
                        '&payType='+payType+
                        '&payRate='+payRate+
                        '&eventDesc='+eventDesc+
                        '&eventType='+eventType+
                        '&participantType='+participantType+
                        '&male='+male+
                        '&female='+female+
                        '&mixed='+mixed+
                        '&assignTo='+assignTo+
                        '&createdBy='+this.createdBy
      this.service.createEvent(eventForm).subscribe(res=>{
        if (res.successful) {
          this.toastr.success(res.message,"",{timeOut:3000})
          // this.router.navigate(['login']);
        }else{
          this.toastr.error(res.error,"",{timeOut:3000})
        }
      },error=>{
        this.toastr.error("Service temporarily not available...","",{timeOut:3000})
      })
    }
  }

}
