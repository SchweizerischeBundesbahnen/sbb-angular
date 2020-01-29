/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHimConstruction]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:rect width="16" height="16" fill="#EB0000" rx="2" />
      <svg:path
        fill="#FFF"
        d="M6.455 3.565l1.538 2.289-1.522 3.045 3.153 2.652c.063-.034.13-.068.196-.098.234-.109.469-.216.575-.352.102-.134.364-.16.364-.16l.417.081.338.485.341.43.625-.027s.262.161.34.216c.079.052.026.35.026.43 0 .081.235.484.235.484l.312.35.468-.027.29.297.364.377h-8.06l.81-.62h.338l.182-.215.13-.323s.263-.188.42-.295c.155-.109.598-.298.598-.298l.21-.305-3.139-2.64.761.928-1.898 3.618a.623.623 0 01-.55.338.6.6 0 01-.3-.078.658.658 0 01-.252-.877l1.493-2.843-1.6-1.949-.123 2.327-.804 3.077a.63.63 0 01-.77.455.648.648 0 01-.44-.792l.76-2.898-.057-2.985.768-.856-1.22-1.026a.33.33 0 01-.047-.454.309.309 0 01.443-.046l.628.528.425-2.243h3.234zM8.595 3c.589 0 1.069.495 1.069 1.104 0 .609-.48 1.102-1.07 1.102-.591 0-1.07-.493-1.07-1.102 0-.61.479-1.104 1.07-1.104zM5.583 8.152l-.648-.544 1.208-.543-.56 1.087zM3.978 4.75l.78.107-1.014 1.077.234-1.184z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 16px;
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
    viewBox: '0 0 16 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-him-cus',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconHimConstruction {}

@Component({
  selector: 'sbb-icon-him-construction',
  template: `
    <svg sbbIconHimConstruction></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconHimConstruction {}

@NgModule({
  declarations: [SvgIconHimConstruction, IconHimConstruction],
  exports: [SvgIconHimConstruction, IconHimConstruction]
})
export class IconHimConstructionModule {}
