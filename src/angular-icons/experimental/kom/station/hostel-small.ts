/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHostelSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M2 20.5h20M2 4.5h20m-18.5 16v-16m17 16v-16m-16 0h15v-2h-15v2zm9 1.5v5m-3-5v5m0-2.5h3m-4 12v-3h5l-.006 3"
      />
      <svg:path
        fill="#000"
        d="M7 12l.5 1.6H9l-1.2.8.5 1.6-1.3-.9-1.3.9.5-1.5-1.2-.9h1.5L7 12zm5 0l.5 1.5H14l-1.2.9.5 1.6-1.3-.9-1.3.9.5-1.5-1.2-.9h1.5L12 12zm5 0l.5 1.5H19l-1.2.9.5 1.6-1.3-.9-1.3.9.5-1.5-1.2-.9h1.5L17 12z"
      />
    </svg:g>
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconHostelSmall {}

@Component({
  selector: 'sbb-icon-hostel-small',
  template: ` <svg sbbIconHostelSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHostelSmall {}

@NgModule({
  declarations: [SvgIconHostelSmall, IconHostelSmall],
  exports: [SvgIconHostelSmall, IconHostelSmall],
})
export class IconHostelSmallModule {}
