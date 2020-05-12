/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconDocumentPdfSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path stroke="#000" d="M6.509 4.5h5.99l5 5v10h-11l.01-15zm5.991 0v5h5" />
      <svg:path
        fill="#000"
        d="M8.651 15.555v.85h.584c.174 0 .3-.032.375-.093.095-.076.142-.19.142-.339 0-.15-.055-.262-.164-.336-.079-.055-.208-.082-.388-.082h-.549zm-.654-.554h1.21c.203 0 .363.013.481.038a.942.942 0 01.317.134c.26.176.391.44.391.792 0 .314-.108.56-.324.738a.824.824 0 01-.314.165 1.582 1.582 0 01-.435.051h-.672V18h-.654v-2.998zm3.413.554v1.891h.504c.155 0 .278-.016.37-.046a.573.573 0 00.239-.158c.159-.17.238-.423.238-.756 0-.306-.073-.537-.22-.695-.147-.157-.364-.236-.652-.236h-.48zm-.654-.554h1.212c.225 0 .418.027.579.078.16.052.302.134.425.247.3.273.449.652.449 1.137 0 .515-.141.911-.424 1.192a1.069 1.069 0 01-.42.265 1.883 1.883 0 01-.595.08h-1.226V15zm5.226 0v.555h-1.456v.695h1.268v.515h-1.268V18h-.654v-2.998h2.11z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconDocumentPdfSmall {}

@Component({
  selector: 'sbb-icon-document-pdf-small',
  template: ` <svg sbbIconDocumentPdfSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentPdfSmall {}

@NgModule({
  declarations: [SvgIconDocumentPdfSmall, IconDocumentPdfSmall],
  exports: [SvgIconDocumentPdfSmall, IconDocumentPdfSmall],
})
export class IconDocumentPdfSmallModule {}
