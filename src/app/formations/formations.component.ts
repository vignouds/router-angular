import { Component, OnInit } from '@angular/core';
import Formation from "../model/Formation";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor() { }

  formations:Array<Formation>;

  ngOnInit() {
    this.formations = [
      new Formation("Java"),
      new Formation("Python"),
      new Formation("Big Data")
    ]
  }
}
