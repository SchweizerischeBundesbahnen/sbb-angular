/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFactorySmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M2.5 7.5h3v6l5-4v4l5-4v4l5-4v11h-18v-13zm3 10h2v-1h-2v1zm5 0h2v-1h-2v1zm5 0h2v-1h-2v1zM7.01 2.891a1.495 1.495 0 00-2.453.718A1.5 1.5 0 002.5 5m8 0a1.496 1.496 0 00-2.942-.391A1.5 1.5 0 005.5 6"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconFactorySmall {}

@Component({
  selector: 'sbb-icon-factory-small',
  template: `
    <svg sbbIconFactorySmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFactorySmall {}

@NgModule({
  declarations: [SvgIconFactorySmall, IconFactorySmall],
  exports: [SvgIconFactorySmall, IconFactorySmall]
})
export class IconFactorySmallModule {}
