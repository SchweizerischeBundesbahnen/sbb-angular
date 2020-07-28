/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaDz]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M22.292 11.304v.104c0 .641-.24 1.189-.724 1.643a2.47 2.47 0 01-1.751.681 2.434 2.434 0 01-1.725-.673c-.477-.448-.717-.988-.717-1.615v-.14H15.59v.104c0 .641-.24 1.189-.729 1.643-.488.454-1.076.681-1.764.681a2.459 2.459 0 01-1.737-.673c-.482-.447-.722-.987-.722-1.613v-.142H8.851v.104c0 .641-.24 1.189-.724 1.643a2.467 2.467 0 01-1.752.681 2.46 2.46 0 01-1.715-.664c-.483-.442-.724-.983-.724-1.622l-.02-.142H1V8.288h4.597V5.02H1.016V2.843h7.859v3.111h9.45V1h2.363v4.954h3.726l1.786 5.35h-3.908"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 27px;
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
    viewBox: '0 0 27 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaDz {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-dz',
  template: ` <svg sbbIconSaDz></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaDz {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaDz, IconSaDz],
  exports: [SvgIconSaDz, IconSaDz],
})
export class IconSaDzModule {}
