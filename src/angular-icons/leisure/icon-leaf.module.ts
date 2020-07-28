import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-leaf',
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
        d="M17.56 20.438s-5.414-1.625-9.056.062c.356 3.909 3.602 7.046 6 9m-1.5-1a12.4 12.4 0 00-4.504 3c1.776 2.184 7.223 5 15.004 1m0-9.5l.03 17m-.03-9.5l-6-4m12-4.5c0-9.505-6-13.5-6-13.5s-6 3.995-6 13.5m11.944-1.563s5.414-1.625 9.056.063c-.356 3.909-3.602 7.046-6 9m1.5-1a12.4 12.4 0 014.504 3c-1.775 2.184-7.223 5-15.004 1m0-2l6-4"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLeafComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLeafComponent],
  exports: [IconLeafComponent],
})
export class IconLeafModule {}
