/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconWineCheeseSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.5 11.5h6m-6 5H8m0 5H3.5V9A1.5 1.5 0 015 7.5h.5v-5h2v5H8A1.5 1.5 0 019.5 9v3m5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 1.5a1 1 0 11-2 0 1 1 0 012 0zm2-1c0-.738.405-1.376 1-1.723V13.5h-3v.5a1.5 1.5 0 11-3 0v-.5h-6v8h12v-2.277c-.595-.347-1-.985-1-1.723z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWineCheeseSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-wine-cheese-small',
  template: ` <svg sbbIconWineCheeseSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWineCheeseSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWineCheeseSmall, IconWineCheeseSmall],
  exports: [SvgIconWineCheeseSmall, IconWineCheeseSmall],
})
export class IconWineCheeseSmallModule {}
