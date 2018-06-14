import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "./../../shared/shared.module";
import { ProfileComponent } from './profile.component';
import {RouterModule, Routes} from '@angular/router';

export const ProfileRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Profile Component',
      status: false
    },
    children: [
      {
        path: '',
        loadChildren: './profile-default/profile-default.module#ProfileDefaultModule'
      }, {
        path: 'info',
        loadChildren: './profile-info/profile-info.module#ProfileInfoModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    SharedModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
