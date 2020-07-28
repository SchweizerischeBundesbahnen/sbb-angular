import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-document-sound',
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
        <path
          fill="none"
          stroke="#000"
          d="M6.5 4.504l5.991-.006 5.01 5.006v10h-11v-15zm5.991-.006l.01 5.006h4.998M9.497 13.5v2h1.72l2 2.006 1.28-.006v-6h-1.28l-2 2h-1.72z"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M9.75 6.755l8.987-.009 7.513 7.51v15H9.75v-22.5zm8.987-.008l.014 7.509h7.498M14.245 20.25v3h2.58l3 3.009 1.92-.01v-9h-1.92l-3 3h-2.58z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentSoundComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDocumentSoundComponent],
  exports: [IconDocumentSoundComponent],
})
export class IconDocumentSoundModule {}
