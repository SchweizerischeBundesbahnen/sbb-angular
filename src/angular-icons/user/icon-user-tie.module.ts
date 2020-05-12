import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-user-tie',
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
          d="M10.084 11.697C7.144 12.757 5.5 16.25 5.5 19.5h13c0-3.27-1.648-6.753-4.588-7.803M12 5.5c1.657 0 3 1.567 3 3.5s-1.343 3.5-3 3.5S9 10.933 9 9s1.343-3.5 3-3.5zm1.912 6.197L12 14l1 4-1 1-1-1 1-4-1.916-2.303"
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
          d="M15.126 17.546c-4.41 1.59-6.876 6.83-6.876 11.704h19.5c0-4.906-2.472-10.129-6.882-11.704M18 8.25c2.485 0 4.5 2.35 4.5 5.25s-2.015 5.25-4.5 5.25c-2.486 0-4.5-2.35-4.5-5.25s2.014-5.25 4.5-5.25zm2.868 9.296L18 21l1.5 6-1.5 1.5-1.5-1.5 1.5-6-2.874-3.454"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserTieComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserTieComponent],
  exports: [IconUserTieComponent],
})
export class IconUserTieModule {}
