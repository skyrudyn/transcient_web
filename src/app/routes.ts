
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { StaffManagementComponent } from './components/staff-management/staff-management.component';
import { EventsComponent} from './components/events/events.component'
export const APP_ROUTES: Routes = [
	{
		path: '',
		component: LoginComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'events',
		component: EventsComponent,
	},
	{
		path: 'logout',
		component: LogoutComponent,
	},
	{
		path: 'staff-management',
		component: StaffManagementComponent,
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'applications',
		component: ApplicationsComponent,
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
	{
		path: 'createevent',
		component: CreateEventComponent,
	},
	{
		path: 'rating',
		component: RatingsComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
];

export const routing: any = RouterModule.forRoot(APP_ROUTES);//,preloadingStrategy: PreloadAllModules});
