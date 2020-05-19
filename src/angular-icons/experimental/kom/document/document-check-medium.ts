/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDocumentCheckMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.743 6.75l.006 22.5h16.5l-.003-15.009L18.75 6.75H9.743zM12 20.25h4.5m-4.5 4.5h4.5M18 19.5l1.5 1.5 4.5-4.5M18 24l1.5 1.5L24 21M18.75 6.75v7.5l7.497-.009"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconDocumentCheckMedium {}

@Component({
  selector: 'sbb-icon-document-check-medium',
  template: ` <svg sbbIconDocumentCheckMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentCheckMedium {}

@NgModule({
  declarations: [SvgIconDocumentCheckMedium, IconDocumentCheckMedium],
  exports: [SvgIconDocumentCheckMedium, IconDocumentCheckMedium],
})
export class IconDocumentCheckMediumModule {}
