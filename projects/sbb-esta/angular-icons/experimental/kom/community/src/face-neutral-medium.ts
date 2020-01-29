/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFaceNeutralMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M30.75 18c0 7.12-5.631 12.75-12.75 12.75S5.25 25.12 5.25 18 10.881 5.25 18 5.25 30.75 10.88 30.75 18zm-5.25 3.75h-15m3-9a.75.75 0 100 1.5.75.75 0 000-1.5m9 0a.75.75 0 100 1.5.75.75 0 000-1.5"
    />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconFaceNeutralMedium {}

@Component({
  selector: 'sbb-icon-face-neutral-medium',
  template: `
    <svg sbbIconFaceNeutralMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFaceNeutralMedium {}

@NgModule({
  declarations: [SvgIconFaceNeutralMedium, IconFaceNeutralMedium],
  exports: [SvgIconFaceNeutralMedium, IconFaceNeutralMedium]
})
export class IconFaceNeutralMediumModule {}
