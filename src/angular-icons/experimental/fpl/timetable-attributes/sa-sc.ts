/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaSc]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M8.79 2.502a.511.511 0 00-.023-.746c-.137-.117-.264-.145-.65-.145-.418 0-.495.019-.604.154-.163.21-.159.57.005.746.104.117.213.14.626.14.418 0 .518-.023.645-.149M1.313 3.776C1 3.692 1 3.356 1 3.202c0-.205.25-.471.463-.49.191-.019.218-.06.536-.854l.332-.83 3.642-.014L9.616 1l.327.85c.313.815.336.848.54.88.282.047.568.323.51.58-.046.2-.087.363-.36.466-.095.028-2.152.018-4.637.028-2.512.01-4.542 0-4.683-.028m6.046 5.16c0-.934-.632-1.4-1.363-1.4-.908 0-1.362.466-1.362 1.4 0 .774.454 1.399 1.362 1.399.908 0 1.363-.467 1.363-1.4m-5.45-4.198h8.175L9.175 15H2.817s-.84-10.324-.909-10.263"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 12px;
        height: 16px;
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
    viewBox: '0 0 12 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaSc {}

@Component({
  selector: 'sbb-icon-sa-sc',
  template: ` <svg sbbIconSaSc></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaSc {}

@NgModule({
  declarations: [SvgIconSaSc, IconSaSc],
  exports: [SvgIconSaSc, IconSaSc],
})
export class IconSaScModule {}
