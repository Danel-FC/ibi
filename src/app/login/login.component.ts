import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:string;
  pass:string;
  constructor(public service:DataService, public router:Router) { 
  }

  login(){
    this.service.login(this.user,this.pass);
    this.router.navigateByUrl('/dashboard');
  }

}
