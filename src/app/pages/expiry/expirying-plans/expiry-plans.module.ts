import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ExpiryPlansComponent} from "./expiry-plans.component";
import {BenefitModule} from "../../../benefit/benefit.module";

export const ExpiryPlansRoutes: Routes = [
  {
    path: '',
    component: ExpiryPlansComponent,
    data: {
      breadcrumb: "Expiring Plans",
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
    ExpiryPlansComponent
  ]
})
export class ExpiryPlansModule { }
