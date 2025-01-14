// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../../Services/event.service';
// import { AsyncPipe, JsonPipe } from '@angular/common';

// @Component({
//   selector: 'app-connect-api',
//   standalone: true,
//   imports: [JsonPipe,AsyncPipe],
//   templateUrl: './connect-api.component.html',
//   styleUrl: './connect-api.component.css'
// })
// export class ConnectApiComponent implements OnInit{
  
//   constructor(public eventService:EventService){}
//   ngOnInit(): void {
//     this.eventService.getEvents();
//   }
// }
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Services/event.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-connect-api',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './connect-api.component.html',
  styleUrls: ['./connect-api.component.css']
})
export class ConnectApiComponent implements OnInit {
  constructor(public eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents();
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}
