import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './routes';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {BanquetServiceService} from './services/banquet-service.service';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogoutComponent } from './components/logout/logout.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateEventComponent,
    RatingsComponent,
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    ApplicationsComponent,
    AboutComponent,
    ContactComponent,
    LogoutComponent,
    StaffManagementComponent,
    EventsComponent
  
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [BanquetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
