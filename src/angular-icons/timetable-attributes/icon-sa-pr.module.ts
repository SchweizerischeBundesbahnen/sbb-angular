import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-pr',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 16"
    >
      <path
        fill-rule="evenodd"
        d="M5.821 7.498h1c1.54 0 3.121-.8 3.121-2.54 0-1.421-1.14-1.721-2.34-1.721h-.88l-.9 4.261zM4.221 15h-2.8L4.38 1.037h2.36c2.581 0 6.121.14 6.121 3.621 0 3.38-2.78 5.041-5.9 5.041h-1.62L4.22 15zm12.84-8.002h1.02c1.502 0 3.322-.46 3.322-2.3 0-1.461-1.261-1.461-2.401-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.562-.04 5.562 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.759.04 1.24.519 1.42 1.28L23 15h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L15.341 15h-2.8l2.92-13.963z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaPrComponent extends IconBase {
  constructor() {
    super({ width: '26px', height: '16px', ratio: 1.625 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaPrComponent],
  exports: [IconSaPrComponent],
})
export class IconSaPrModule {}
