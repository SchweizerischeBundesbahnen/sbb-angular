import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-question-answer',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M3.5 5.5h12v9H8.75L6.5 16.75V14.5h-3v-9zm12 3h5v9h-3v2.25l-2.25-2.25H9.5v-3m9.5-3h-3.5m2.5 2h-2.5"
          />
          <path
            fill="#000"
            d="M8.828 12.628v-.812h.844v.812h-.844zM7.497 8.675c.018-.484.113-.859.285-1.125.158-.244.369-.433.633-.566.263-.133.558-.199.886-.199.529 0 .949.15 1.262.449.291.276.437.639.437 1.09 0 .372-.099.693-.296.961-.089.122-.301.347-.637.675a2.052 2.052 0 00-.311.358.998.998 0 00-.123.353 3.116 3.116 0 00-.039.547H8.93c.006-.398.041-.694.106-.886a1.23 1.23 0 01.201-.379c.087-.112.281-.322.58-.629.193-.198.319-.377.379-.535.049-.136.074-.274.074-.414 0-.261-.072-.479-.215-.657-.172-.216-.426-.324-.762-.324-.695 0-1.07.427-1.125 1.281h-.671z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            stroke="#000"
            d="M5.25 8.25h18v13.5H13.125L9.75 25.125V21.75h-4.5V8.25zm18 4.5h7.5v13.5h-4.5v3.375l-3.375-3.375H14.25v-4.5m14.25-4.5h-5.25m3.75 3h-3.75"
          />
          <path
            fill="#000"
            d="M13.242 18.942v-1.218h1.266v1.218h-1.266zm-1.997-5.93c.028-.726.17-1.288.428-1.687.237-.366.553-.65.95-.849.394-.2.837-.299 1.329-.299.793 0 1.423.226 1.893.674.436.414.655.958.655 1.635 0 .558-.148 1.04-.444 1.441-.134.184-.452.521-.956 1.013a3.078 3.078 0 00-.466.537c-.087.143-.149.32-.184.53a4.674 4.674 0 00-.059.82h-.996c.009-.597.062-1.041.159-1.329.07-.211.17-.402.301-.568.131-.168.422-.483.87-.944.29-.297.479-.566.569-.803a1.82 1.82 0 00.111-.62c0-.392-.108-.719-.322-.986-.258-.324-.64-.486-1.143-.486-1.043 0-1.605.64-1.688 1.921h-1.007z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionAnswerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconQuestionAnswerComponent],
  exports: [IconQuestionAnswerComponent],
})
export class IconQuestionAnswerModule {}
