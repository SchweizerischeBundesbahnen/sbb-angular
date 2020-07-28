import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-market-shopping-bag',
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
        d="M28.5 21.492l-1 17h16l-1-17h-14zm8.994 3.5l.006-7.5a2 2 0 00-4 0v7.5m-28 13.516h18v-7h-18v7zm16-21.29v14.274h-14V17.218m3 .274a2 2 0 01-2-2 2 2 0 01-4 0v-2h20v2a2 2 0 01-4 0 2 2 0 01-4 0 2 2 0 01-4 0 2 2 0 01-2 2zm15.501-4l-3-4H6.5l-3 4h22.501z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMarketShoppingBagComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconMarketShoppingBagComponent],
  exports: [IconMarketShoppingBagComponent],
})
export class IconMarketShoppingBagModule {}
