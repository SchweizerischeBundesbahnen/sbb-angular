/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaRe]',
  template: `
    <svg:g fill="#000" fill-rule="evenodd">
      <svg:path
        d="M5.941 6.999h1.02c1.501 0 3.321-.46 3.321-2.3 0-1.461-1.26-1.461-2.4-1.461h-1.16l-.78 3.761zm-1.6-5.961h3.3c2.58 0 5.561-.04 5.561 3.301 0 2.4-1.8 3.681-4.08 3.721v.04c.76.04 1.24.519 1.42 1.28l1.34 5.621h-2.94l-.68-3.28c-.32-1.481-.24-2.521-1.76-2.521h-1.06L4.22 15.001h-2.8L4.34 1.038zM16.78 1.038h8.222l-.42 2.2h-5.46L18.4 6.68h4.882l-.44 2.201H17.94l-.82 3.921h5.521l-.479 2.2H13.84z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 26px;
        height: 16px;
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
    viewBox: '0 0 26 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconSaRe {}

@Component({
  selector: 'sbb-icon-sa-re',
  template: `
    <svg sbbIconSaRe></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaRe {}

@NgModule({
  declarations: [SvgIconSaRe, IconSaRe],
  exports: [SvgIconSaRe, IconSaRe]
})
export class IconSaReModule {}
