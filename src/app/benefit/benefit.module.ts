import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserCardComponent} from "./user-card/user-card.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CoachCallsComponent} from "./coach-calls/coach-calls.component";
import {UserCardHeaderComponent} from "./profile/user-card-header/user-card-header.component";
import {UserQuickLinksComponent} from "./profile/user-quick-links/user-quick-links.component";
import {UserWorkoutFormComponent} from "./profile/user-workout-form/user-workout-form.component";
import {UserExpiryCardComponent} from "./user-expiry-card/user-expiry-card.component";
import {UserInfoFormComponent} from "./user-info/user-info-form/user-info-form.component";
import {UserTimelineTableComponent} from "./user-timeline-table/user-timeline-table.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    UserCardComponent,
    CoachCallsComponent,
    UserCardHeaderComponent,
    UserQuickLinksComponent,
    UserWorkoutFormComponent,
    UserExpiryCardComponent,
    UserInfoFormComponent,
    UserTimelineTableComponent
  ],
  exports: [
    NgbModule,
    UserCardComponent,
    CoachCallsComponent,
    UserCardHeaderComponent,
    UserQuickLinksComponent,
    UserWorkoutFormComponent,
    UserExpiryCardComponent,
    UserInfoFormComponent,
    UserTimelineTableComponent
  ],
  providers: [

  ]
})
export class BenefitModule { }
