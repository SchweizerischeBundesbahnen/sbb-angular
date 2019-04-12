/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-user-group-row',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg *ngSwitchDefault [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M20.476 17.618c3.78 2.17 5.46 5.706 5.775 10.133H9.75c.073-4.54 2.073-8.037 5.698-10.125m-1.154-2.808c.225 2.227 1.734 3.934 3.705 3.934 1.97 0 3.479-1.707 3.704-3.934m-1.409-4.135c-.627-.579-1.411-.934-2.295-.934-.885 0-1.669.355-2.296.934M24 6.75c-1.97 0-3.479 1.708-3.705 3.934.891.82 1.455 2.101 1.455 3.569 0 .193-.027.377-.045.565.627.579 1.412.934 2.295.934 2.137 0 3.75-1.999 3.75-4.5 0-2.502-1.613-4.502-3.75-4.502zm-2.295 8.069c.02-.188.045-.372.045-.566 0-1.467-.564-2.748-1.454-3.568m-4.591 0C15.48 8.456 13.97 6.748 12 6.748c-2.136 0-3.75 2-3.75 4.503 0 2.5 1.614 4.5 3.75 4.5.885 0 1.67-.356 2.296-.935-.02-.187-.046-.372-.046-.565 0-1.467.565-2.748 1.455-3.569zm0 0c-.89.82-1.455 2.1-1.455 3.568 0 .193.027.378.046.565m12.18-.2c3.78 2.17 5.46 5.707 5.775 10.133h-6.468m-15.67-.004H3.75c.075-4.54 2.073-8.037 5.7-10.125"/></svg>
      <svg *ngSwitchCase="size?.indexOf('large') === 0 ? size : ''" [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#000" d="M19.06 19.757C19.36 22.64 21.373 25 24 25c2.628 0 4.625-2.375 4.94-5.243m-1.88-5.513c-.835-.77-1.881-1.246-3.06-1.246-1.178 0-2.224.475-3.06 1.246M32 8.998c-2.627 0-4.639 2.278-4.939 5.246C28.247 15.338 29 17.046 29 19.002c0 .259-.035.505-.061.755.836.77 1.882 1.245 3.061 1.245 2.849 0 5-2.665 5-6 0-3.336-2.151-6.004-5-6.004zm-11.06 5.246c-.17-1.669-.527-3.724-1.648-4.598C18.433 8.976 17.15 8.5 16 8.5c-1.117 0-2.444.451-3.313 1.166-1.335 1.102-1.686 3.307-1.686 5.336 0 3.335 2.15 6 5 6 1.177 0 2.223-.475 3.06-1.245-.026-.25-.06-.496-.06-.755 0-1.956.752-3.664 1.938-4.758zm6.12 0s1.803-.17 3.285-1.524a1.306 1.306 0 0 1 1.85.082c1.13 1.238 2.965 2.944 4.769 2.944M20.91 14.051c-.839 0-2.48-2.355-2.48-2.355a.935.935 0 0 0-.943-.236c-1.226.402-2.395.178-3.037-.015a.941.941 0 0 0-.936.239s-1.356 2.359-2.487 2.359m27.9 8.599l2.189-.48a.563.563 0 0 0 .229-.993c-1.447-1.148-3.985-3.59-4.375-6.84m-17.764 2.944l2.45-1.287a.665.665 0 0 1 .702.05c.901.646 3.601 2.166 6.166.386M13.33 35.5H4.5c.1-6.054 3.151-13.397 7.987-16.182m22.846.201C40.372 22.413 43.5 29.625 43.5 35.5h-8.823M9 28.5h4m-2.5 0V27m17.1-3.8L25 27.04l1 2-2 4-2-4 1-2-2.6-3.84C15.566 26.087 13 33.25 13 39.5h22c0-6.125-2.361-13.3-7.4-16.3z"/></svg>
    </ng-container>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUserGroupRowComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconUserGroupRowComponent],
  exports: [IconUserGroupRowComponent],
})
export class IconUserGroupRowModule { }
