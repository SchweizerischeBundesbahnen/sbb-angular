import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-document-sbb',
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
          <path stroke="#000" d="M6.509 4.5h5.99l5 5v10h-11l.01-15zm5.991 0v5h5" />
          <path
            fill="#000"
            d="M12.8 14l1.601 1.5H12.5V14h-1v1.5H9.6l1.6-1.5H10l-2 2 2 2h1.2l-1.6-1.5h1.9V18h1v-1.5h1.901L12.8 18H14l2-2-2-2z"
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
          <path stroke="#000" d="M9.763 6.75h8.987l7.5 7.5v15H9.75l.013-22.5zm8.987 0v7.5h7.5" />
          <path
            fill="#000"
            d="M19.2 21l2.401 2.25H18.75V21h-1.5v2.25H14.4L16.8 21H15l-3 3 3 3h1.8l-2.4-2.25h2.85V27h1.5v-2.25h2.851L19.2 27H21l3-3-3-3z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconDocumentSbbComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconDocumentSbbComponent],
  exports: [IconDocumentSbbComponent],
})
export class IconDocumentSbbModule {}
