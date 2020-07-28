import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-music-rock-hand-gesture',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M16.499 26.5v-2.536a5.98 5.98 0 002-4.464V12a1.5 1.5 0 10-3 0v7-2a1.5 1.5 0 00-3 0v2h0v-2a1.5 1.5 0 00-3 0v2-7a1.5 1.5 0 00-3 0l-.001 7.5c0 1.706.728 3.33 2.001 4.464V26.5m9 10.924l-10 .076v-11h10v10.924zm-10-8.924h10-10zm2 2.5v6.5V31zM25 29.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm13.001-4a3.5 3.5 0 11.001 6.999 3.5 3.5 0 01-.001-6.999zM28.501 33V15.443L41.502 12.5v16.809M28.501 18.443L41.502 15.5"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMusicRockHandGestureComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconMusicRockHandGestureComponent],
  exports: [IconMusicRockHandGestureComponent],
})
export class IconMusicRockHandGestureModule {}
