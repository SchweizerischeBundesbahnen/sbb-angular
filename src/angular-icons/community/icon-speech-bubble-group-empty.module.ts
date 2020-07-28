import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-speech-bubble-group-empty',
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
          d="M3.5 4.5h8v5H6.75L4.5 11.75V9.5h-1v-5zm13 8v6h-2v2.25l-2.25-2.25H7.5v-6h9zm4-7v4h-1v2.25L17.25 9.5H14.5v-4h6z"
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
          d="M5.25 6.75h12v7.5h-7.125L6.75 17.625V14.25h-1.5v-7.5zm19.5 12v9h-3v3.375l-3.375-3.375H11.25v-9h13.5zm6-10.5v6h-1.5v3.375l-3.375-3.375H21.75v-6h9z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSpeechBubbleGroupEmptyComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSpeechBubbleGroupEmptyComponent],
  exports: [IconSpeechBubbleGroupEmptyComponent],
})
export class IconSpeechBubbleGroupEmptyModule {}
