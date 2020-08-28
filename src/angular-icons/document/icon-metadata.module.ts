import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-metadata',
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
          d="M18 15l-2-2m0 4l2-2-2-2M6 9l2 2m0-4L6 9l2 2m-5.5 9.5h19v-17h-19v17zm7.5-13h8m-12 9h8m-4-6h5m1 0h2m-12 3h2m1 0h5"
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
          d="M27 22.5l-3-3m0 6l3-3-3-3m-15-6l3 3m0-6l-3 3 3 3M3.75 30.75h28.5V5.25H3.75v25.5zM15 11.25h12M9 24.75h12m-6-9h7.5m1.5 0h3m-18 4.5h3m1.5 0H21"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMetadataComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconMetadataComponent],
  exports: [IconMetadataComponent],
})
export class IconMetadataModule {}
