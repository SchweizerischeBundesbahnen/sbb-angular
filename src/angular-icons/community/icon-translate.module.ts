import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-translate',
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
          d="M8.5 11.82l-3 3V12.5h-3v-9h13v7m6 0h-13v9h7.709l2.291 2.291V19.5h3v-9zm-7.5-4H4m8 2H4m16 5H10m10 2H10M2.5 15v4.5h3.793m-1.768-1.768L6.293 19.5l-1.768 1.767M21.5 9V5.5h-3.793m1.768 1.768L17.707 5.5l1.768-1.767"
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
          d="M12.75 17.731l-4.5 4.5V18.75h-4.5V5.25h19.5v10.5m9 0h-19.5v13.5h11.564l3.436 3.437V29.25h4.5v-13.5zM21 9.75H6m12 3H6m24 7.5H15m15 3H15M3.75 22.5v6.75h5.69m-2.653-2.651L9.44 29.25 6.787 31.9M32.25 13.5V8.25h-5.69m2.652 2.651L26.56 8.25l2.652-2.65"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTranslateComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTranslateComponent],
  exports: [IconTranslateComponent],
})
export class IconTranslateModule {}
