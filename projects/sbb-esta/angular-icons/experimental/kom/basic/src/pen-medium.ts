/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPenMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M28.935 10.486L25.5 13.935 22.065 10.5 25.5 7.065l3.435 3.421zm-9.435 2.58l3.435 3.433-11.25 11.251H8.25v-3.435l11.25-11.25z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconPenMedium {}

@Component({
  selector: 'sbb-icon-pen-medium',
  template: `
    <svg sbbIconPenMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPenMedium {}

@NgModule({
  declarations: [SvgIconPenMedium, IconPenMedium],
  exports: [SvgIconPenMedium, IconPenMedium]
})
export class IconPenMediumModule {}
