import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {TimelineComponent} from "./timeline.component";
import {BenefitModule} from "../../../benefit/benefit.module";

export const ExpiryPlansRoutes: Routes = [
  {
    path: '',
    component: TimelineComponent,
    data: {
      breadcrumb: "User's Timeline",
      icon: 'icofont-home bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExpiryPlansRoutes),
    SharedModule,
    BenefitModule
  ],
  declarations: [
    TimelineComponent
  ]
})
export class TimelineModule { }
