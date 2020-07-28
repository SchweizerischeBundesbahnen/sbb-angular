/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconNetworkSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.538 14.503A3.488 3.488 0 018.5 12c0-1.165.55-2.184 1.408-2.817L6.976 5.154c-.26.218-.598.346-.976.346-.85 0-1.5-.65-1.5-1.5S5.15 2.5 6 2.5s1.5.65 1.5 1.5c0 .472-.2.882-.524 1.154l2.933 4.03A3.505 3.505 0 0112 8.503 3.47 3.47 0 0115.501 12c0 1.954-1.547 3.5-3.501 3.5a3.49 3.49 0 01-2.462-.997l-2.625 2.56A2.005 2.005 0 005.5 16.5c-1.13 0-2 .869-2 1.998a1.97 1.97 0 002 2.002c1.13 0 2.006-.872 2.006-2.002 0-.571-.225-1.076-.593-1.436zm8.144.139l-2.502-1.158 2.502 1.158c.31-.686.992-1.142 1.818-1.142 1.136 0 2 .864 2 2 0 1.136-.864 2-2 2-1.136 0-2-.864-2-2 0-.31.065-.6.182-.858zm.083-6.778l-2.942 2.049 2.941-2.05A1.51 1.51 0 0117.5 7c0-.844.656-1.505 1.5-1.505s1.51.661 1.51 1.505c0 .844-.666 1.5-1.51 1.5-.52 0-.968-.248-1.236-.636z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconNetworkSmall {}

@Component({
  selector: 'sbb-icon-network-small',
  template: ` <svg sbbIconNetworkSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconNetworkSmall {}

@NgModule({
  declarations: [SvgIconNetworkSmall, IconNetworkSmall],
  exports: [SvgIconNetworkSmall, IconNetworkSmall],
})
export class IconNetworkSmallModule {}
