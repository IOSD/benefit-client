import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<ng2-toasty [position]="\'top-right\'"></ng2-toasty><router-outlet><app-spinner></app-spinner></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
