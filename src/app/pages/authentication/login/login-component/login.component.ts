import { Component, OnInit } from '@angular/core';

import {AuthService} from "../../../../_services/auth.service";
import {Router} from "@angular/router";
import {NotificationsService} from "../../../../_services/notifications.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private  auth : AuthService , private router: Router, private notify : NotificationsService) { }

  ngOnInit() {
  }

  login( data ) {
    console.log(data);
    this.auth.login( data.email , data.password ).subscribe( res => {
      console.log(res);

      if( res.success ){
        this.notify.addToast({
          'title' : "Login Successful" ,
          'msg' : 'Redirecting' ,
          'type' : 'success' ,
          'time' : 2000
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.notify.addToast({
          'title' : "Login Unsuccessful" ,
          'msg' : res.message ,
          'type' : 'error' ,
          'time' : 3000
        });
      }
    })
  }

}
