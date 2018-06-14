import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileInfoComponent} from "./profile-info.component";
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {BenefitModule} from "../../../benefit/benefit.module";

export const ProfileDefaultRoutes: Routes = [
  {
    path: '',
    component: ProfileInfoComponent,
    data: {
      breadcrumb: 'User Info',
      sublabel : 'Info of Users for Coaches',
      icon: 'icofont-user bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileDefaultRoutes),
    SharedModule,
    BenefitModule
  ],
  declarations: [
    ProfileInfoComponent
  ]
})
export class ProfileInfoModule { }
