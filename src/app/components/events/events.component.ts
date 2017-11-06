import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanquetServiceService } from '../../services/banquet-service.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any = [];
  constructor(private router: Router, private service: BanquetServiceService) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    if (localStorage.getItem('staffId') == null) {
      let data = 0;
      this.service.getEvent(data).subscribe(res => {
        this.events = res;
      })
    } else {
      let data = localStorage.getItem('staffId');
      this.service.getEvent(data).subscribe(res => {
        this.events = res;
      })
    }
  }
  create() {
    this.router.navigate(['createevent'])
  }
}
