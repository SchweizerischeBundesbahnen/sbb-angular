/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconUserGroupLarge]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.06 19.757C19.36 22.64 21.373 25 24 25c2.628 0 4.625-2.375 4.94-5.243m-1.88-5.513c-.835-.77-1.881-1.246-3.06-1.246-1.178 0-2.224.475-3.06 1.246M32 8.998c-2.627 0-4.639 2.278-4.939 5.246C28.247 15.338 29 17.046 29 19.002c0 .259-.035.505-.061.755.836.77 1.882 1.245 3.061 1.245 2.849 0 5-2.665 5-6 0-3.336-2.151-6.004-5-6.004zm-11.06 5.246c-.17-1.669-.527-3.724-1.648-4.598C18.433 8.976 17.15 8.5 16 8.5c-1.117 0-2.444.451-3.313 1.166-1.335 1.102-1.686 3.307-1.686 5.336 0 3.335 2.15 6 5 6 1.177 0 2.223-.475 3.06-1.245-.026-.25-.06-.496-.06-.755 0-1.956.752-3.664 1.938-4.758zm6.12 0s1.803-.17 3.285-1.524a1.306 1.306 0 011.85.082c1.13 1.238 2.965 2.944 4.769 2.944M20.91 14.051c-.839 0-2.48-2.355-2.48-2.355a.935.935 0 00-.943-.236c-1.226.402-2.395.178-3.037-.015a.941.941 0 00-.936.239s-1.356 2.359-2.487 2.359m27.9 8.599l2.189-.48a.563.563 0 00.229-.993c-1.447-1.148-3.985-3.59-4.375-6.84m-17.764 2.944l2.45-1.287a.665.665 0 01.702.05c.901.646 3.601 2.166 6.166.386M13.33 35.5H4.5c.1-6.054 3.151-13.397 7.987-16.182m22.846.201C40.372 22.413 43.5 29.625 43.5 35.5h-8.823M9 28.5h4m-2.5 0V27m17.1-3.8L25 27.04l1 2-2 4-2-4 1-2-2.6-3.84C15.566 26.087 13 33.25 13 39.5h22c0-6.125-2.361-13.3-7.4-16.3z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 48px;
        height: 48px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 48 48',
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconUserGroupLarge {}

@Component({
  selector: 'sbb-icon-user-group-large',
  template: ` <svg sbbIconUserGroupLarge></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserGroupLarge {}

@NgModule({
  declarations: [SvgIconUserGroupLarge, IconUserGroupLarge],
  exports: [SvgIconUserGroupLarge, IconUserGroupLarge],
})
export class IconUserGroupLargeModule {}
