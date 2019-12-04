/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconEscalatorMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.246 8.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm14.254 0H24a3.747 3.747 0 00-2.822 1.281l-9.38 10.72H7.5A3.754 3.754 0 003.75 24a3.755 3.755 0 003.75 3.75h6c1.082 0 2.11-.467 2.822-1.282L25.7 15.75H28.5A3.754 3.754 0 0032.25 12a3.754 3.754 0 00-3.75-3.75zm-17.253 12v-7.5h3v4.7"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconEscalatorMedium {}

@Component({
  selector: 'sbb-icon-escalator-medium',
  template: `
    <svg sbbIconEscalatorMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconEscalatorMedium {}

@NgModule({
  declarations: [SvgIconEscalatorMedium, IconEscalatorMedium],
  exports: [SvgIconEscalatorMedium, IconEscalatorMedium]
})
export class IconEscalatorMediumModule {}
