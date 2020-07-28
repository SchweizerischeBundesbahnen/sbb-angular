import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-hostel',
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
            d="M2 20.5h20M2 4.5h20m-18.5 16v-16m17 16v-16m-16 0h15v-2h-15v2zm9 1.5v5m-3-5v5m0-2.5h3m-4 12v-3h5l-.006 3"
          />
          <path
            fill="#000"
            d="M7 12l.5 1.6H9l-1.2.8.5 1.6-1.3-.9-1.3.9.5-1.5-1.2-.9h1.5L7 12zm5 0l.5 1.5H14l-1.2.9.5 1.6-1.3-.9-1.3.9.5-1.5-1.2-.9h1.5L12 12zm5 0l.5 1.5H19l-1.2.9.5 1.6-1.3-.9-1.3.9.5-1.5-1.2-.9h1.5L17 12z"
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
            d="M3 30.75h30m-30-24h30m-27.75 24v-24m25.5 24v-24m-24 0h22.5v-3H6.75v3zM20.25 9v7.5M15.75 9v7.5m0-3.75h4.5m-6 18v-4.5h7.5l-.009 4.5"
          />
          <path
            fill="#000"
            d="M10.5 18l.75 2.401h2.25L11.7 21.6l.75 2.4-1.95-1.349L8.55 24l.75-2.25L7.5 20.4h2.25L10.5 18zm7.5 0l.75 2.25H21l-1.8 1.35.75 2.4L18 22.65 16.05 24l.75-2.25L15 20.4h2.25L18 18zm7.5 0l.75 2.25h2.25l-1.8 1.35.75 2.4-1.95-1.349L23.55 24l.75-2.25-1.8-1.349h2.25L25.5 18z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHostelComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconHostelComponent],
  exports: [IconHostelComponent],
})
export class IconHostelModule {}
