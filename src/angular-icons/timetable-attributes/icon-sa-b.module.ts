import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-b',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
    >
      <path
        fill-rule="evenodd"
        d="M3.305 14.35c-.35-.534-.64-1.004-.87-1.415-.232-.411-.528-1.025-.89-1.841C1.181 10.277 1 9.264 1 8.054c0-1.122.199-2.158.591-3.1.392-.943.963-2.002 1.713-3.175h1.272a32.885 32.885 0 00-.944 1.76c-.218.446-.478 1.06-.781 1.84-.3.78-.453 1.679-.453 2.695 0 1.038.166 1.981.5 2.82.331.842.59 1.45.77 1.824.181.375.484.92.908 1.633H3.305v-.002zM18.418 1.777c.689 1.076 1.246 2.092 1.668 3.048.424.955.638 2.032.638 3.229 0 1.149-.174 2.132-.518 2.948-.345.818-.615 1.4-.808 1.752-.193.35-.521.884-.98 1.597h-1.27c.459-.845.78-1.452.962-1.813.182-.364.426-.95.735-1.76.307-.81.463-1.723.463-2.74a8.25 8.25 0 00-.164-1.631 9.364 9.364 0 00-.49-1.624 22.593 22.593 0 00-.606-1.38c-.19-.379-.487-.92-.9-1.622h1.27v-.004zM10.05 13.6v-4.5c-.928-.121-1.793-.464-2.344-1.01-.548-.546-.891-1.11-.985-1.676-.115-.567-.171-.991-.171-1.293V1h8.4v4.122c0 .261-.057.686-.153 1.272-.113.588-.452 1.152-1.003 1.698-.55.545-1.413.888-2.344 1.01V13.6l3.499.001V15H6.55v-1.399h3.5z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaBComponent extends IconBase {
  constructor() {
    super({ width: '22px', height: '16px', ratio: 1.375 });
  }
}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconSaBComponent],
  exports: [IconSaBComponent],
})
export class IconSaBModule {}
