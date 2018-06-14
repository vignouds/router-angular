import { Component, OnInit } from '@angular/core';
import Formation from "../model/Formation";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  formations:Array<Formation>;

  ngOnInit() {
    this.route.data.subscribe(data => this.formations = data['formations']);
  }
}
