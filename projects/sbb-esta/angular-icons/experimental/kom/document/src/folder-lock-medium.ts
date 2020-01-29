/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFolderLockMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M19.5 26.25H6.75v-13.5h15l1.5-3h5.992L29.25 18m-3 6.75v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3M27.75 30v-3.047m-4.5 5.297h9v-7.5h-9v7.5z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-document',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconFolderLockMedium {}

@Component({
  selector: 'sbb-icon-folder-lock-medium',
  template: `
    <svg sbbIconFolderLockMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFolderLockMedium {}

@NgModule({
  declarations: [SvgIconFolderLockMedium, IconFolderLockMedium],
  exports: [SvgIconFolderLockMedium, IconFolderLockMedium]
})
export class IconFolderLockMediumModule {}
