/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSaWs]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M3.307 14.267c-.35-.529-.64-1-.87-1.407-.232-.411-.528-1.02-.894-1.833C1.183 10.215 1 9.207 1 8.004c0-1.167.196-2.207.59-3.123.393-.913.967-1.954 1.717-3.12h1.274c-.412.72-.727 1.304-.947 1.75a25.028 25.028 0 00-.78 1.831c-.303.776-.455 1.669-.455 2.68 0 1.035.164 1.97.499 2.805.333.836.59 1.442.771 1.814.183.373.486.913.91 1.624H3.307v.002zm6.782-4.478L8.18 7.64l-.855-1.028a3.595 3.595 0 01-.693-2.162c0-1.095.404-2.127 1.21-3.1l.2-.216L8.14 1l4.84 5.462-.005-2.067 3.742-3.393.887.953-3.324 3.015.002 1.59 4.101-3.758.915.979-4.127 3.753 1.616.104L20.1 4.647l.908.937-3.725 3.393-2.2-.143 4.145 4.674L17.52 15l-4.284-4.835-.093-.343-.106.325L7.724 15l-1.527-1.652 3.892-3.56zM8.214 3.474c-.061.145-.104.286-.128.425a2.487 2.487 0 00-.035.406c0 .664.246 1.278.741 1.844l.51.576 1.834 2.095 1.086-.972-3.856-4.38-.134-.355-.018.361zM23.04 1.76c.69 1.07 1.248 2.081 1.673 3.032.423.95.636 2.02.636 3.212 0 .59-.06 1.173-.18 1.75a8.222 8.222 0 01-.52 1.632 15.05 15.05 0 01-.627 1.291c-.193.35-.522.878-.982 1.59H21.77c.425-.735.74-1.315.945-1.741.206-.426.463-1.035.772-1.823.309-.787.466-1.694.466-2.716 0-1.023-.162-1.947-.483-2.77-.321-.824-.581-1.432-.78-1.823-.202-.39-.507-.936-.92-1.634h1.272z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 26px;
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
    viewBox: '0 0 26 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaWs {}

@Component({
  selector: 'sbb-icon-sa-ws',
  template: ` <svg sbbIconSaWs></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaWs {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaWs, IconSaWs],
  exports: [SvgIconSaWs, IconSaWs],
})
export class IconSaWsModule {}
