import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:ActivatedRoute, public service:DataService) { 
  }

  ngOnInit() {
  }

  get showNav():boolean{
    return this.service.user!=null; //this.route.snapshot.url.length>0;
  }

}
