import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-hand-heart',
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
          d="M13.344 5.128a2.487 2.487 0 00-2.35-1.627 2.48 2.48 0 00-1.997 1.002A2.486 2.486 0 006.996 3.5a2.484 2.484 0 00-2.2 3.673c.11.2.24.384.397.545L8.996 11.5l3.798-3.777c.09-.108.303-.382.373-.504.208-.364.327-.785.327-1.237 0-.301-.052-.588-.15-.855zm-4.483 11.9L4.126 13.72a1 1 0 00-1.252 1.56L8.8 20.5h3.943l1.008 1h7.45l-5.028-5.064c-1.137-1.094-2.584-1.908-4.063-1.936H10c-1.985 0-2.032 3 0 3h2"
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
          d="M20.016 7.692a3.731 3.731 0 00-3.524-2.441 3.72 3.72 0 00-2.997 1.503 3.728 3.728 0 00-3.001-1.503c-2.08 0-3.753 1.655-3.753 3.723 0 .65.165 1.257.454 1.787.164.301.359.576.594.817l5.705 5.673 5.697-5.665c.135-.162.454-.573.56-.756.311-.546.49-1.178.49-1.856 0-.451-.078-.882-.225-1.282zm-6.724 17.85L6.189 20.58a1.5 1.5 0 00-1.878 2.34l8.888 7.83h5.914l1.512 1.5H31.8l-7.542-7.596c-1.705-1.641-3.876-2.862-6.094-2.904H15c-2.977 0-3.048 4.5 0 4.5h3"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHandHeartComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconHandHeartComponent],
  exports: [IconHandHeartComponent],
})
export class IconHandHeartModule {}
