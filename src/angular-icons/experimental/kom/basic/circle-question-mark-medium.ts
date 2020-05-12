/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCircleQuestionMarkMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M30.75 18c0 7.068-5.68 12.75-12.75 12.75S5.25 25.068 5.25 18c0-7.07 5.68-12.75 12.75-12.75S30.75 10.93 30.75 18z"
      />
      <svg:path
        fill="#000"
        d="M16.686 26.986v-2.498h2.595v2.498h-2.595zM12.589 14.83c.056-1.488.348-2.642.878-3.459a4.923 4.923 0 011.945-1.741c.809-.409 1.718-.612 2.728-.612 1.624 0 2.917.46 3.878 1.381.896.849 1.346 1.965 1.346 3.351 0 1.144-.305 2.13-.913 2.955-.272.377-.925 1.068-1.958 2.078-.457.44-.774.806-.955 1.099-.18.293-.306.654-.378 1.087-.08.433-.12.992-.12 1.682h-2.042c.017-1.226.124-2.134.324-2.727.144-.433.351-.82.618-1.165.268-.344.864-.989 1.784-1.934.593-.609.982-1.157 1.165-1.646.152-.417.228-.841.228-1.273 0-.801-.219-1.473-.66-2.018-.53-.664-1.31-.997-2.341-.997-2.14 0-3.293 1.313-3.46 3.939H12.59z"
      />
    </svg:g>
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
export class SvgIconCircleQuestionMarkMedium {}

@Component({
  selector: 'sbb-icon-circle-question-mark-medium',
  template: ` <svg sbbIconCircleQuestionMarkMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCircleQuestionMarkMedium {}

@NgModule({
  declarations: [SvgIconCircleQuestionMarkMedium, IconCircleQuestionMarkMedium],
  exports: [SvgIconCircleQuestionMarkMedium, IconCircleQuestionMarkMedium],
})
export class IconCircleQuestionMarkMediumModule {}
