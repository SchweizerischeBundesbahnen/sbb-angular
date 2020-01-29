/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFolderOpenArrowSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.5 12.5v-2h-8v-2H3.491l.009 12h14.15l2.65-8H6.35l-2.85 8m7-15.5l3 3 3-3m-3-3v6"
    />
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconFolderOpenArrowSmall {}

@Component({
  selector: 'sbb-icon-folder-open-arrow-small',
  template: `
    <svg sbbIconFolderOpenArrowSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFolderOpenArrowSmall {}

@NgModule({
  declarations: [SvgIconFolderOpenArrowSmall, IconFolderOpenArrowSmall],
  exports: [SvgIconFolderOpenArrowSmall, IconFolderOpenArrowSmall]
})
export class IconFolderOpenArrowSmallModule {}
