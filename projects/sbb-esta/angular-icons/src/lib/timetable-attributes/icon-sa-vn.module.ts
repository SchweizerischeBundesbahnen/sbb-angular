/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-sa-vn',
  // tslint:disable:max-line-length
  template: `
    <svg
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 16"
    >
      <path
        fill-rule="evenodd"
        d="M14.572 2.48h2.325l.478.988L21.357 1l.955 1.53-4.156 2.578.812 1.719c.234-.064.44-.111.614-.143.175-.032.375-.048.597-.048 1.093 0 2.023.383 2.787 1.146.774.745 1.163 1.669 1.163 2.774a3.776 3.776 0 0 1-1.148 2.772 3.856 3.856 0 0 1-2.787 1.13c-1.071 0-1.996-.377-2.771-1.13a3.776 3.776 0 0 1-1.148-2.772c0-.669.15-1.29.452-1.863a3.788 3.788 0 0 1 1.316-1.418l-.333-.717-4.079 4.523h-2.39c-.158 1.018-.6 1.843-1.322 2.47-.711.615-1.571.924-2.579.924-.512 0-.973-.084-1.386-.248-.415-.164-.844-.438-1.291-.82L1.94 15 1 13.47l2.645-1.608a4.808 4.808 0 0 1-.176-.685 3.902 3.902 0 0 1-.048-.636c0-1.073.382-1.987 1.147-2.741.773-.765 1.702-1.148 2.787-1.148.371 0 .812.081 1.322.24l1.306-1.928-.54-.988H7.897v-.954h3.774v.954h-1.065l.333.671 4.54-.017 1.019-.636-.255-.526h-1.67V2.48zM7.404 7.657c-.829 0-1.535.282-2.12.844-.572.564-.86 1.253-.86 2.071v.35c.01.023.024.067.04.136.017.07.046.162.088.279l2.023-1.242 1.528-2.327a2.077 2.077 0 0 0-.7-.111zm.955 5.653a2.861 2.861 0 0 0 1.505-1.257c.175-.298.296-.622.36-.972l-1.817.016-2.867 1.736c.5.437 1.105.654 1.816.654.35 0 .684-.06 1.003-.177zM9.013 8.2l-.447.7.749-.462a1.268 1.268 0 0 0-.302-.238zm1.497-2.23l-.925 1.386c.19.138.32.235.39.293.07.06.152.14.248.247l.988-.588-.7-1.339zm1.512 2.899l-.892.555.112.654h1.434l-.654-1.209zm-.556-3.25l.62 1.179 1.88-1.164-2.5-.015zM13.6 9.68l3.663-4.062-4.38 2.708.717 1.354zm4.524 2.946a2.878 2.878 0 0 0 2.07.846c.797 0 1.486-.282 2.07-.846.573-.552.86-1.242.86-2.07 0-.817-.286-1.508-.86-2.071-.584-.564-1.29-.845-2.119-.845-.18 0-.308.006-.383.016-.074.012-.19.042-.35.096l1.45 3.074-.925.446-1.45-3.074c-.807.583-1.21 1.37-1.21 2.358a2.88 2.88 0 0 0 .847 2.07z"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaVnComponent extends IconBase {
  constructor() {
    super({ width: '25px', height: '16px', ratio: 1.5625 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaVnComponent],
  exports: [IconSaVnComponent]
})
export class IconSaVnModule {}
