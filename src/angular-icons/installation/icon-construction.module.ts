import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-construction',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M8 21l4-2 1-3 2-1 2-2.5h2l2 3.5M4 8l8.75 8.75M10 14l1-5-2-2H7l-1 3m0 0l.5 4L4 19m4-7l1 3-2 4m7 1l3-2 1-2.5M8 12l3-3M9 7l-3 3m6.5-3.5c-.533 0-1-.467-1-1 0-.533.467-1 1-1 .533 0 1 .467 1 1 0 .533-.467 1-1 1z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M12 31.5l6-3 1.5-4.5 3-1.5 3-3.75h3l3 5.25M6 12l13.125 13.125M15 21l1.5-7.5-3-3h-3L9 15m0 0l.75 6L6 28.5M12 18l1.5 4.5-3 6M21 30l4.5-3 1.5-3.75M12 18l4.5-4.5m-3-3L9 15m9.75-5.25c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconConstructionComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconConstructionComponent],
  exports: [IconConstructionComponent],
})
export class IconConstructionModule {}
