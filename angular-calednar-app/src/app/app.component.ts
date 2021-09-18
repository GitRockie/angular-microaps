import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/angular';
import { createEventId } from './event-utils';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calednar-app';

  Events: any = [];

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: 
      {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },

    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { 
      title: 'Coding a lot',
      date: '2021-09-18',
      color:'#E81132', 
      textColor:'yellow', 
      },

      {
      title: 'IT PROJECT/CIBERNARIUM',
      date: '2021-09-20',
      color:'#FF33DD', 
      textColor:'#340C2D',
      },

      {
      title: 'Picnic Concert', 
      date: '2021-09-19'
      },

      {
      title: 'Mama Birthday', date: '2021-09-22',   color:'#0CBD6A', 
      textColor:'#FFFFFF',
     }
    ]

  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }


/*
  constructor( private httpClient: HttpClient ) { }

  onDateSelect(arg: any) {
    alert('Date clicked: ' + arg.dateStr)
  }

  ngOnInit(){
      setTimeout(() => {
          return this.httpClient.get('http://localhost:8888/dynamic-events.php')
          .subscribe((res: any) => {
              this.Events.push(res);
              console.log(this.Events);
          });
      }, 2500);

      setTimeout(() => {
        this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateSelect.bind(this),
        events:[

          {
          color:'green', 
          textColor:'yellow', 
          start:'2021-09-19', 
          end:'2021-09-19', 
          title:'Picnic Concert'
          }, 
          
          {
          color:'green', 
          textColor:'yellow', 
          start:'2021-09-22', 
          end:'2021-09-22',
          title:'Mama Birthday'
          }
        
        ]
        };
    }, 2500);

    } 
*/
}
