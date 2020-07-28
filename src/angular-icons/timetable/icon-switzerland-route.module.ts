import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-switzerland-route',
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
            d="M13.545 5.728l-1.013 1.307L8.768 8.06l-.74-.4-2.44 1.813 1.103.379-2.903 3.219-1.08 3.954 2.14-.544.945-.55 2.237 2.14 3.157-.353 1.82-1.97 2.152 2.979 1.574-3.338 3.664.957-.232-2.003 1.543.039-.158-3.27-1.343-1.025-.436.827-1.776-.536.663-1.976-3.717-1.443-1.396-1.232zm-4.337 9.024l5-5"
          />
          <path
            fill="#000"
            d="M9.21 15.75a1 1 0 110-2 1 1 0 010 2zm5-5.01a1 1 0 110-2 1 1 0 010 2z"
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
            d="M20.318 8.592l-1.52 1.96-5.646 1.54-1.11-.6-3.66 2.719 1.655.568-4.355 4.829-1.62 5.93 3.21-.815 1.418-.825 3.355 3.211 4.736-.53 2.728-2.954 3.23 4.467 2.36-5.007 5.497 1.435-.348-3.004 2.314.058-.237-4.903-2.014-1.54-.654 1.241-2.664-.804.994-2.964-5.575-2.164-2.094-1.848zm-6.505 13.536l7.5-7.5"
          />
          <path
            fill="#000"
            d="M13.815 23.625a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5-7.515a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
          />
        </g>
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#000"
          d="M20 29.5a1.5 1.5 0 10-3.001 0 1.5 1.5 0 003.001 0zm10-10.49a1.5 1.5 0 10-3.001 0 1.5 1.5 0 003.001 0zm-10.441 9.432l7.884-8.374m-.705-8.893l-2.044 2.638-7.595 2.07-1.492-.807-4.925 3.657 2.228.764-5.859 6.497-2.179 7.978 4.317-1.097 1.906-1.113 4.515 4.323 6.37-.717 3.67-3.971 4.346 6.008 3.173-6.736 7.392 1.932-.466-4.042 3.113.079-.319-6.596-2.709-2.069-.88 1.668-3.583-1.081 1.338-3.987-7.499-2.911-2.818-2.487z"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwitzerlandRouteComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSwitzerlandRouteComponent],
  exports: [IconSwitzerlandRouteComponent],
})
export class IconSwitzerlandRouteModule {}
