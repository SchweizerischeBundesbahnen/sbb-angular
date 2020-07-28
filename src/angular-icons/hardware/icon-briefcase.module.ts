import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-briefcase',
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
          d="M18.97 20.25H4.03a1.53 1.53 0 01-1.53-1.53V8.03c0-.845.685-1.53 1.53-1.53h14.94a1.53 1.53 0 011.53 1.53v10.69c0 .845-.684 1.53-1.53 1.53zM8.5 6.5v-.47c0-.845.688-1.53 1.537-1.53h2.926c.849 0 1.537.685 1.537 1.53v.47m-12 5h18m-7.766 2h-2.468a.766.766 0 01-.766-.766v-2.467c0-.424.343-.767.766-.767h2.468c.423 0 .766.343.766.767v2.467a.766.766 0 01-.766.766z"
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
          d="M28.456 30.375H6.045A2.295 2.295 0 013.75 28.08V12.045A2.295 2.295 0 016.045 9.75h22.411a2.294 2.294 0 012.294 2.295V28.08a2.293 2.293 0 01-2.294 2.294zM12.75 9.75v-.706a2.3 2.3 0 012.306-2.294h4.389a2.3 2.3 0 012.305 2.294v.706m-18 7.5h27m-11.65 3H15.4a1.15 1.15 0 01-1.15-1.15v-3.7c0-.636.515-1.15 1.15-1.15H19.1a1.15 1.15 0 011.149 1.15v3.7a1.15 1.15 0 01-1.15 1.15z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBriefcaseComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconBriefcaseComponent],
  exports: [IconBriefcaseComponent],
})
export class IconBriefcaseModule {}
