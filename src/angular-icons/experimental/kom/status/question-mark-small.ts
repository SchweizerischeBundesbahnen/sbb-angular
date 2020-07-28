/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconQuestionMarkSmall]',
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M11.014 18.98v-1.939h2.015v1.939h-2.015zm-3.18-9.437c.043-1.157.27-2.052.681-2.686a3.818 3.818 0 011.511-1.353c.627-.317 1.333-.475 2.117-.475 1.262 0 2.266.357 3.012 1.072.697.659 1.045 1.527 1.045 2.602 0 .889-.236 1.654-.709 2.294-.212.293-.719.83-1.52 1.614-.355.342-.602.627-.742.853a2.324 2.324 0 00-.293.844c-.063.335-.094.771-.094 1.306h-1.585c.012-.951.096-1.657.251-2.117.113-.336.272-.637.481-.905.208-.267.67-.768 1.385-1.501.46-.473.762-.898.904-1.278.118-.323.178-.653.178-.989 0-.621-.171-1.144-.513-1.566-.411-.516-1.017-.774-1.819-.774-1.66 0-2.555 1.019-2.686 3.059H7.834z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-status',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconQuestionMarkSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-question-mark-small',
  template: ` <svg sbbIconQuestionMarkSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionMarkSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconQuestionMarkSmall, IconQuestionMarkSmall],
  exports: [SvgIconQuestionMarkSmall, IconQuestionMarkSmall],
})
export class IconQuestionMarkSmallModule {}
