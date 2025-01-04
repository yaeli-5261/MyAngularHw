import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {  } from "module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  
    RouterLinkActive,
    RouterOutlet, 
    RouterLink, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'yaeli naaman';
  goodWord() {
    let hour = new Date().getHours();
    if (hour > 6 && hour < 12)
      return "good morning!"
    if (hour > 12 && hour < 16)
      return "good noon!"
    if (hour > 16 && hour < 20)
      return "good afternoon!"
    else
      return "good night!"
  }

}

