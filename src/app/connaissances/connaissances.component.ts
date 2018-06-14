import { Component, OnInit } from '@angular/core';
import Connaissance from '../model/Connaissance';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  constructor() { }

  connaissances:Array<Connaissance>;

  ngOnInit() {
    this.connaissances=[
      new Connaissance("connaissance 1"),
      new Connaissance("connaissance 2"),
      new Connaissance("connaissance 3")
    ]
  }
}
