import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-vae',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M14.646 4.2h-2.623l-2.607 8.156h-.033L6.81 4.2H4.186l3.756 11.6h2.866l3.838-11.6zm-1.104 11.6h2.575l.906-2.583h4.324l.874 2.583h2.64L20.536 4.2H17.93l-4.388 11.6zm5.651-8.74h.033l1.457 4.256h-2.996l1.506-4.257zm6.555 8.74h8.776v-2.145h-6.233v-2.843h5.602V8.83H28.29V6.345h6.104V4.2h-8.647v11.6z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductVaeComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductVaeComponent],
  exports: [IconProductVaeComponent],
})
export class IconProductVaeModule {}
