import { Component } from '@angular/core';
import { Notification } from '@sbb-esta/angular-business/notification';

@Component({
  selector: 'sbb-jumpmark-notification-example',
  templateUrl: './jumpmark-notification-example.component.html',
})
export class JumpmarkNotificationExampleComponent {
  constructor(private _notification: Notification) {}

  jumpmarks = [
    { elementId: '#tip1', title: 'Tip 1' },
    { elementId: '#tip2', title: 'Tip 2' },
  ];

  showNotification() {
    this._notification.open('text', {
      jumpMarks: this.jumpmarks,
    });
  }
}
