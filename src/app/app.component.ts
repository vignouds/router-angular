import {Router} from "@angular/router";
import { OnInit } from '@angular/core';
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  idDetail:number = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    })
  }
}
