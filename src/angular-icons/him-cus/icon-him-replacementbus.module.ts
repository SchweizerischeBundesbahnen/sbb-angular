import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-him-replacementbus',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="16" height="16" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M6.822 10.362c-1.296 0-2.346 1.024-2.346 2.288 0 1.264 1.05 2.288 2.346 2.288S9.17 13.914 9.17 12.65c0-1.264-1.05-2.288-2.347-2.288zm0 3.363c-.604 0-1.095-.478-1.095-1.068 0-.59.49-1.068 1.095-1.068.606 0 1.096.479 1.096 1.068 0 .59-.49 1.068-1.096 1.068zm5.38-9.586C12.088 3.51 11.524 3 10.957 3H.003v1.227h1.615V8.5H.001v1.666L0 12.657h3.71c0-1.675 1.394-3.034 3.112-3.034 1.72 0 3.113 1.359 3.113 3.034h2.216c.572 0 1.036-.513 1.036-1.158V8.652L12.2 4.14zm-9.851.088h3.23V8.5H2.35V4.227zm4.038.004h.867v4.282H6.39V4.231zm1.706-.004h.868V8.51h-.868V4.227zM9.812 8.51V4.227h1.465l.957 4.282H9.812z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHimReplacementbusComponent extends IconBase {
  constructor() {
    super({ width: '16px', height: '16px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconHimReplacementbusComponent],
  exports: [IconHimReplacementbusComponent],
})
export class IconHimReplacementbusModule {}
