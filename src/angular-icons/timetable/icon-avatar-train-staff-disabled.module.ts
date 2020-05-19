import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-avatar-train-staff-disabled',
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
            d="M14 17.5s-1.07 1-2.5 1-2.5-1-2.5-1M19 19L3 3m4.686 1.272c1.037.142 2.365.228 3.814.228 3.313 0 6-.448 6-1 0-.553-2.687-1-6-1-2.163 0-4.053.191-5.109.477M5.5 5.5v4c0 1.104 2.687 2 6 2m-4.438-.658c.303 1.217 2.164 2.159 4.438 2.159.481 0 .93-.06 1.361-.14M5.5 11.45L5.995 16s.284 2.266 1.514 3.38c1.388 1.258 2.463 2.087 3.991 2.087s2.604-.83 3.991-2.086c.753-.682 1.147-1.786 1.343-2.547m.407-3.007l.26-2.377m-2.243.394c.343-.298.589-.634.68-1.002m-1.318.364c1.725-.351 2.88-.983 2.88-1.706v-6"
          />
          <path
            fill="#000"
            d="M12.875 9.461l1.025-.96H12l-1-1V6h1v1.5h1.9L12.3 6h1.2l2 2-2.06 2.06-.565-.6zm-2.839-2.839L9.5 6h1.2l-.664.622zM9.5 14.5a.75.75 0 110 1.5.75.75 0 010-1.5zm4 0a.75.75 0 110 1.5.75.75 0 010-1.5z"
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
            d="M21 26.25s-1.605 1.5-3.75 1.5-3.75-1.5-3.75-1.5m15 2.25l-24-24m7.029 1.908c1.556.213 3.547.342 5.721.342 4.97 0 9-.672 9-1.5 0-.83-4.03-1.5-9-1.5-3.245 0-6.08.287-7.664.716M8.25 8.25v6c0 1.656 4.03 3 9 3m-6.657-.986c.454 1.825 3.246 3.237 6.657 3.237.721 0 1.395-.089 2.041-.209M8.25 17.175L8.992 24s.426 3.399 2.271 5.071c2.082 1.886 3.695 3.13 5.987 3.13 2.292 0 3.906-1.244 5.986-3.13 1.13-1.023 1.721-2.679 2.015-3.82m.61-4.51l.39-3.566m-3.364.59c.514-.447.883-.95 1.02-1.501m-1.977.545c2.588-.527 4.32-1.475 4.32-2.56v-9"
          />
          <path
            fill="#000"
            d="M19.313 14.192l1.537-1.442H18l-1.5-1.5V9H18v2.25h2.85L18.45 9h1.8l3 3-3.09 3.09-.848-.898zm-4.259-4.259L14.25 9h1.8l-.996.933zM14.25 21.75a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm6 0a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconAvatarTrainStaffDisabledComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconAvatarTrainStaffDisabledComponent],
  exports: [IconAvatarTrainStaffDisabledComponent],
})
export class IconAvatarTrainStaffDisabledModule {}
