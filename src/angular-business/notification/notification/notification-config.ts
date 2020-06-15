import { Direction } from '@angular/cdk/bidi';
import { TemplateRef, ViewContainerRef } from '@angular/core';

import { JumpMark, NotificationType } from './notification.component';

/** Possible values for horizontalPosition on NotificationConfig. */
export type NotificationHorizontalPosition = 'center';

/** Possible values for verticalPosition on NotificationConfig. */
export type NotificationVerticalPosition = 'top' | 'bottom';

export class NotificationConfig<D = any> {
  viewContainerRef?: ViewContainerRef;

  duration?: number = 0;

  panelClass?: string | string[];

  direction?: Direction;

  message?: string;

  horizontalPosition?: NotificationHorizontalPosition = 'center';

  verticalPosition?: NotificationVerticalPosition = 'bottom';

  type?: NotificationType = NotificationType.SUCCESS;

  jumpMarks?: JumpMark[];

  icon?: TemplateRef<any> | null;

  readonly?: boolean;
}
