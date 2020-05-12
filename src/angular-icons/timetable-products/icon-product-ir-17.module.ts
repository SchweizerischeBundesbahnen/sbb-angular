import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-product-ir-17',
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
          d="M42.292 4.235V15.8H39.99V8.23h-2.712V6.553a5.796 5.796 0 001.376-.174c.353-.1.684-.266.974-.49.425-.327.712-.878.859-1.654h1.805zm11.069 0v1.962c-.063.069-.25.282-.56.64-.489.58-.92 1.207-1.285 1.872-.397.688-.73 1.413-.993 2.163a18.188 18.188 0 00-.907 4.928h-2.38c.032-.98.184-1.952.452-2.895a18.824 18.824 0 011.187-3.18c.72-1.498 1.45-2.613 2.192-3.346h-5.44V4.235h7.734zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr17Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr17Component],
  exports: [IconProductIr17Component],
})
export class IconProductIr17Module {}
