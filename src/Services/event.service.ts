import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyEvent } from '../models/my-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  // private url= "https://eventsapi.onrender.com/api/Events";

  // constructor(private http:HttpClient) { }

  // getEvents():Observable<MyEvent[]>{
  //   return this.http.get<MyEvent[]>(this.url);
  // }

  // addEvent(event:MyEvent){
  //   return this.http.post<MyEvent>(this.url,event);
  
  // }

 
  private url = "https://eventsapi.onrender.com/api/Events";
  events$ : Observable<MyEvent[]> = new Observable<MyEvent[]>;

  constructor(private http: HttpClient) { }

  getEvents() {
   this.http.get<MyEvent[]>(this.url).subscribe(data=>{
    this.events$ = of(data);
   });
  } 

  addEvent(event: MyEvent){
    return this.http.post<MyEvent>(this.url, event);
  }

  
}
