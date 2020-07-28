import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-product-ir-36',
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
          d="M36.608 7.898a4.344 4.344 0 01.702-2.389c.715-1.034 1.79-1.55 3.224-1.55 1.104 0 1.995.282 2.673.846a2.953 2.953 0 011.096 2.373 2.593 2.593 0 01-.43 1.499 2.107 2.107 0 01-1.163.85c.59.123 1.114.462 1.47.95.37.518.559 1.143.54 1.78a3.545 3.545 0 01-1.261 2.807c-.778.675-1.76 1.013-2.948 1.013-1.288 0-2.309-.372-3.063-1.115-.754-.744-1.131-1.749-1.131-3.014v-.15h2.215c0 .711.168 1.261.504 1.649.364.4.889.613 1.427.581.615 0 1.088-.182 1.42-.546.301-.335.465-.774.457-1.226a1.686 1.686 0 00-.584-1.352c-.32-.275-.814-.412-1.482-.412-.187 0-.374.01-.56.032v-1.7c.137.01.268.015.395.015 1.324 0 1.986-.493 1.986-1.479a1.359 1.359 0 00-.433-1.048 1.62 1.62 0 00-1.143-.4 1.575 1.575 0 00-1.254.507c-.294.337-.452.83-.473 1.479h-2.184zm16.84-.775h-2.192c-.205-.892-.71-1.337-1.514-1.337-.851 0-1.456.524-1.813 1.574a9.318 9.318 0 00-.355 1.938 3.365 3.365 0 011.108-1.013c.44-.216.925-.322 1.415-.308a3.26 3.26 0 012.61 1.155 4.05 4.05 0 01.937 2.737c0 1.302-.42 2.349-1.26 3.14a3.84 3.84 0 01-2.729 1.068c-1.36 0-2.42-.516-3.177-1.547-.756-1.03-1.135-2.469-1.135-4.315 0-1.972.405-3.517 1.214-4.635a3.752 3.752 0 013.209-1.621c1.277 0 2.254.43 2.932 1.289a3.89 3.89 0 01.75 1.875zm-3.903 2.65a1.53 1.53 0 00-1.316.696c-.3.43-.455.946-.442 1.47a2.489 2.489 0 00.45 1.48c.294.453.801.72 1.34.704a1.586 1.586 0 001.332-.672c.318-.432.485-.958.473-1.495a2.44 2.44 0 00-.426-1.448 1.64 1.64 0 00-1.411-.736zM9.22 4.2h4.056L8.258 15.8H4.185zM25.98 12.366a.925.925 0 00.847-.553L30.119 4.2H15.984l-5.018 11.6h4.038l3.8-8.69h5.993l-1.201 2.775-5.226-.019 4.217 5.934h4.597l-3.124-3.434h1.92z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconProductIr36Component extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconProductIr36Component],
  exports: [IconProductIr36Component],
})
export class IconProductIr36Module {}
