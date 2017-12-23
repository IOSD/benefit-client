import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import * as moment from "moment";
import "rxjs/add/operator/do";
import "rxjs/add/operator/shareReplay";
import {LoginResponse} from "../_models/LoginResponse";

@Injectable()
export class AuthService {

  apiUrl : string ;

  constructor(private  http : HttpClient) {
    this.apiUrl = environment.apiUrl ;
  }

  login(email:string, password:string ) {
    return this.http.post<LoginResponse>(this.apiUrl + '/api/login', {email, password})
      .do(res => {
        if(res.success)
          this.setSession(res);
      })


  }

  private setSession(authResult) {

    const expiresAt = moment().add(authResult.token.expiresIn,'second');

    localStorage.setItem('id_token', authResult.token.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
