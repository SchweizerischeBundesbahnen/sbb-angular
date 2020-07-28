/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDocumentZipMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M9.75 6.75h9l7.5 7.5v15H9.75V6.75zm9 0v7.5h7.5" />
      <svg:path stroke-dasharray="1 1" d="M12.75 7.5V27m1.5-18v19.5" />
    </svg:g>
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
export class SvgIconDocumentZipMedium {}

@Component({
  selector: 'sbb-icon-document-zip-medium',
  template: ` <svg sbbIconDocumentZipMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentZipMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconDocumentZipMedium, IconDocumentZipMedium],
  exports: [SvgIconDocumentZipMedium, IconDocumentZipMedium],
})
export class IconDocumentZipMediumModule {}
