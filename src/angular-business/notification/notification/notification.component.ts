import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { NotificationType } from '../notification-container/notification-container.component';

import { NotificationConfig } from './notification-config';
import { NotificationRef } from './notification-ref';
import { NOTIFICATION_CONFIG } from './notification.service';

/** @deprecated position should now be defined using NotificationVerticalPosition. */
export enum NotificationToastPosition {
  TOPLEFT = 'top-left',
  TOPRIGHT = 'top-right',
  BOTTOMLEFT = 'bottom-left',
  BOTTOMRIGHT = 'bottom-right',
}

export interface JumpMark {
  /** Title of an element in jump marks. */
  title: string;
  /** Identifier of an element in jump marks. */
  elementId?: string;
  callback?: (event$: any, jumpMark: JumpMark) => void;
}

@Component({
  selector: 'sbb-notification',
  templateUrl: './notification.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  /** @deprecated type should now be defined in NotificationConfig. */
  @Input()
  type: 'success' | 'info' | 'error' | 'warn' = NotificationType.SUCCESS;

  /** Type of notification.
   *  @deprecated position should now be defined in NotificationConfig.
   */
  @Input()
  toastPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  @Input()
  set readonly(value: boolean) {
    this._readonly = coerceBooleanProperty(value);
    this._changeDetectorRef.markForCheck();
  }

  get readonly() {
    return this._readonly;
  }

  private _readonly = false;

  /** @docs-private */
  @ViewChild('error', { read: TemplateRef, static: true })
  errorIcon: TemplateRef<any>;

  /** @docs-private */
  @ViewChild('check', { read: TemplateRef, static: true })
  checkIcon: TemplateRef<any>;

  /** @docs-private */
  @ViewChild('info', { read: TemplateRef, static: true })
  infoIcon: TemplateRef<any>;

  @Input()
  set icon(notificationIcon: TemplateRef<any> | null) {
    this._icon = notificationIcon;
  }

  get icon(): TemplateRef<any> | null {
    if (this._icon) {
      return this._icon;
    }
    switch (this.config.type) {
      case NotificationType.SUCCESS:
        return this.checkIcon;
      case NotificationType.ERROR:
      case NotificationType.WARN:
        return this.errorIcon;
      case NotificationType.INFO:
        return this.infoIcon;
      default:
        return null;
    }
  }

  /** List of in page links displayed on the bottom of the notification
   *  @deprecated jumpMarks should now be defined in NotificationConfig.
   */
  @Input() jumpMarks?: JumpMark[];
  private _icon: TemplateRef<any> | null;

  @Output()
  dismissed: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() private _notificationRef: NotificationRef<any>,
    @Inject(NOTIFICATION_CONFIG) public config: NotificationConfig
  ) {}

  /**
   * Used to scroll to an element identified by a jump mark
   *
   * @param $event click event
   * @param jumpMark jump mark after the notification message
   */
  scrollTo($event: any, jumpMark: JumpMark) {
    $event.preventDefault();
    if (jumpMark.elementId) {
      document.querySelector(jumpMark.elementId)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (jumpMark.callback) {
      jumpMark.callback($event, jumpMark);
    }
  }

  dismiss() {
    this._notificationRef.dismiss(true);
  }

  // tslint:disable: member-ordering
  static ngAcceptInputType_readonly: BooleanInput;
  // tslint:enable: member-ordering
}
