import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login-component/login.component';
import {WithSocialComponent} from './registration/with-social/with-social.component';
import {AuthService} from "../../_services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {NotificationsService} from "../../_services/notifications.service";


export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'registration',
        component: WithSocialComponent,
        data: {
          breadcrumb: 'Registration'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers : [
    AuthService,
    NotificationsService
  ],
  declarations: [LoginComponent, WithSocialComponent]
})
export class AuthenticationModule { }
