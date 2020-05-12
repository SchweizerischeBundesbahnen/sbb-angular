/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAvatarPoliceSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.5 9.5h-12l-1-3 7-2 7 2-1 3zm-6 2.5c1.892 0 3.575-.976 4.75-2.5h-9.5C7.925 11.024 9.608 12 11.5 12zm-1.7 2a.3.3 0 11-.6 0 .3.3 0 01.6 0zm4 0a.3.3 0 11-.6 0 .3.3 0 01.6 0zM12 7a.5.5 0 11-1 0 .5.5 0 011 0zm2.052 9.552c-.528.569-1.474.948-2.552.948-1.013 0-1.91-.335-2.452-.848M5.48 11s.298 4.908 1 6c1.873 2.911 3.961 3.5 5.01 3.5 1.048 0 3.136-.589 5.01-3.5.701-1.092 1-6 1-6"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconAvatarPoliceSmall {}

@Component({
  selector: 'sbb-icon-avatar-police-small',
  template: ` <svg sbbIconAvatarPoliceSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAvatarPoliceSmall {}

@NgModule({
  declarations: [SvgIconAvatarPoliceSmall, IconAvatarPoliceSmall],
  exports: [SvgIconAvatarPoliceSmall, IconAvatarPoliceSmall],
})
export class IconAvatarPoliceSmallModule {}
