import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-archive-box',
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
          d="M8 11.8h5m4.5-3h-14m7.2-4H6.5l-3 4v12h14l3-4v-12h-4.4m-8.6 4l4-5 4 5m-2.9-3.625L14.5 2.8l3.87 4.84M17.5 20.8v-12l3-4"
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
          d="M12 17.7h7.5m6.75-4.5h-21m10.8-6h-6.3l-4.5 6v18h21l4.5-6v-18H24.15m-12.899 6l6-7.5 6 7.5M18.9 7.764l2.85-3.562 5.806 7.258M26.25 31.201v-18l4.5-6"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArchiveBoxComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconArchiveBoxComponent],
  exports: [IconArchiveBoxComponent],
})
export class IconArchiveBoxModule {}
