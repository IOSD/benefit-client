import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {CallDefaultComponent} from "./call-default.component";
import {BenefitModule} from "../../../benefit/benefit.module";

export const CallDefaultRoutes: Routes = [
  {
    path: '',
    component: CallDefaultComponent,
    data: {
      breadcrumb: "Today's Calls",
      icon: 'icofont-home bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CallDefaultRoutes),
    SharedModule,
    BenefitModule
  ],
  declarations: [
    CallDefaultComponent,
  ]
})
export class CallDefaultModule { }
