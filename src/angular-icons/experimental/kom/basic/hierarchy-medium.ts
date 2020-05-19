/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHierarchyMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M6.75 30.75v-7.5h9v7.5h-9zm15 0v-7.5h9v7.5h-9zm-3-12v-4.5 4.5zm-4.5-4.5v-7.5h9v7.5h-9zm-3 9v-4.5h15v4.5"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconHierarchyMedium {}

@Component({
  selector: 'sbb-icon-hierarchy-medium',
  template: ` <svg sbbIconHierarchyMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHierarchyMedium {}

@NgModule({
  declarations: [SvgIconHierarchyMedium, IconHierarchyMedium],
  exports: [SvgIconHierarchyMedium, IconHierarchyMedium],
})
export class IconHierarchyMediumModule {}
