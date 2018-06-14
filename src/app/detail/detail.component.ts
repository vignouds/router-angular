import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PATH_HOME, PATH_DETAIL} from "../constantes.routes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateToHome(){
    this.router.navigate([PATH_HOME]);
  }

  navigateToDetail2(){
    this.router.navigate([PATH_DETAIL, 2]);
  }

  ngOnInit() {
  //console.log('idDetail snapshot', this.route.snapshot.paramMap.get('idDetail'));
  this.route.paramMap.subscribe((params: ParamMap) => {
    console.log('isDetail', params.get('idDetail'));
    });
  }
}
