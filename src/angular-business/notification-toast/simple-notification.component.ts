import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';

import { SBB_NOTIFICATION_TOAST_DATA } from './notification-toast-config';
import { SbbNotificationToastRef } from './notification-toast-ref';

/**
 * Interface for a simple notification toast component that has a message and a single action.
 */
export interface TextOnlyNotificationToast {
  data: { message: string };
  notificationToastRef: SbbNotificationToastRef<TextOnlyNotificationToast>;
}

/**
 * A component used to open as the default notification toast, matching digital.sbb.ch spec.
 * This should only be used internally by the notification toast service.
 */
@Component({
  selector: 'sbb-simple-notification',
  templateUrl: './simple-notification.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleNotificationComponent implements TextOnlyNotificationToast {
  /** Data that was injected into the notification toast. */
  data: { message: string };

  constructor(
    public notificationToastRef: SbbNotificationToastRef<SimpleNotificationComponent>,
    @Inject(SBB_NOTIFICATION_TOAST_DATA) data: any
  ) {
    this.data = data;
  }

  /** Dismisses the notification toast. */
  dismiss() {
    this.notificationToastRef.dismiss();
  }
}