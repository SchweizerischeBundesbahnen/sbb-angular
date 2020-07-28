import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ic-21',
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
          d="M44.632 13.743V15.8h-8.301c-.003-.612.1-1.22.303-1.796a4.374 4.374 0 01.856-1.471c.305-.337.639-.646.997-.925.38-.301 1.14-.852 2.275-1.654.447-.286.84-.65 1.158-1.076.224-.342.34-.745.331-1.154.02-.453-.14-.896-.445-1.23a1.538 1.538 0 00-1.17-.471c-1.188 0-1.8.857-1.838 2.57h-2.215v-.252c0-1.403.392-2.49 1.175-3.26.762-.748 1.747-1.122 2.956-1.123a4.008 4.008 0 012.688.918c.783.664 1.175 1.558 1.175 2.682a3.69 3.69 0 01-.938 2.53c-.175.204-.367.39-.576.558-.178.14-.649.476-1.41 1.009-.726.506-1.245.894-1.558 1.163a6.216 6.216 0 00-.87.925h5.407zm6.606-9.508V15.8h-2.301V8.23h-2.712V6.553a5.798 5.798 0 001.375-.174c.353-.1.684-.266.974-.49.426-.328.712-.879.86-1.654h1.804zM9.221 4.2h4.056L8.259 15.8H4.186zM15.948 4.2h14.395l-1.49 3.445H18.572l-2.041 4.71h10.285l-1.49 3.445H10.931z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIc21Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIc21Component],
  exports: [IconProductIc21Component],
})
export class IconProductIc21Module {}
