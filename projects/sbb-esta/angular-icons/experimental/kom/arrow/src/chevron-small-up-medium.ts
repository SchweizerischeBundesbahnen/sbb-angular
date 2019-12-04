/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconChevronSmallUpMedium]',
  template: `
    <svg:path fill="none" stroke="#000" d="M23.851 20.512l-5.856-5.925-5.856 5.923" />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconChevronSmallUpMedium {}

@Component({
  selector: 'sbb-icon-chevron-small-up-medium',
  template: `
    <svg sbbIconChevronSmallUpMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconChevronSmallUpMedium {}

@NgModule({
  declarations: [SvgIconChevronSmallUpMedium, IconChevronSmallUpMedium],
  exports: [SvgIconChevronSmallUpMedium, IconChevronSmallUpMedium]
})
export class IconChevronSmallUpMediumModule {}
