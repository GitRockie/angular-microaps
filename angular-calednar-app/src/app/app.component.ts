import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calednar-app';

  Events: any = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

 

}

















