import { Injectable } from '@angular/core';
import {ToastData, ToastOptions, ToastyConfig, ToastyService} from 'ng2-toasty';

@Injectable()
export class NotificationsService {

  constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }

  addToast( options ){

    var toastOptions:ToastOptions = {
      title: options.title ,
      msg:  options.msg ,
      showClose: true,
      timeout: (options.time) ? options.time : 5000 ,
      onAdd: (toast:ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function(toast:ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }

  }
}
