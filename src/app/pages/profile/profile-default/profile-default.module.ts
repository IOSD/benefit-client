import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDefaultComponent } from './profile-default.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {UserCardHeaderComponent} from "../../../benefit/profile/user-card-header/user-card-header.component";
import {UserQuickLinksComponent} from "../../../benefit/profile/user-quick-links/user-quick-links.component";
import {UserWorkoutFormComponent} from "../../../benefit/profile/user-workout-form/user-workout-form.component";
import {BenefitModule} from "../../../benefit/benefit.module";

export const ProfileDefaultRoutes: Routes = [
  {
    path: '',
    component: ProfileDefaultComponent,
    data: {
      breadcrumb: 'User Profile',
      sublabel : 'Assign/Update Plans ',
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
    ChartModule,
    BenefitModule
  ],
  declarations: [
    ProfileDefaultComponent
  ]
})
export class ProfileDefaultModule { }
