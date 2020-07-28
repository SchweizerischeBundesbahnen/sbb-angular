/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconDocumentPdfMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M9.763 6.75h8.987l7.5 7.5v15H9.75l.013-22.5zm8.987 0v7.5h7.5" />
      <svg:path
        fill="#000"
        d="M12.977 23.333v1.274h.876c.261 0 .449-.047.563-.138.142-.114.213-.285.213-.509 0-.225-.083-.393-.246-.504-.119-.082-.312-.123-.582-.123h-.824zm-.98-.83h1.814c.305 0 .545.019.722.056.174.04.333.107.475.201.39.264.587.66.587 1.188 0 .471-.162.84-.486 1.107a1.236 1.236 0 01-.471.248 2.373 2.373 0 01-.653.076h-1.008V27h-.98v-4.497zm5.118.83v2.837h.756c.232 0 .417-.024.555-.07a.859.859 0 00.358-.236c.239-.257.357-.635.357-1.134 0-.46-.11-.806-.33-1.043-.22-.235-.546-.354-.978-.354h-.718zm-.981-.83h1.818c.337 0 .627.04.868.116.242.078.453.201.638.37.45.41.673.979.673 1.706 0 .773-.211 1.367-.636 1.788-.186.186-.396.32-.63.398-.234.08-.532.118-.892.118h-1.84v-4.497zm7.84 0v.83H21.79v1.043h1.902v.773H21.79v1.85h-.981v-4.496h3.165z"
      />
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
export class SvgIconDocumentPdfMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-document-pdf-medium',
  template: ` <svg sbbIconDocumentPdfMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentPdfMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconDocumentPdfMedium, IconDocumentPdfMedium],
  exports: [SvgIconDocumentPdfMedium, IconDocumentPdfMedium],
})
export class IconDocumentPdfMediumModule {}
