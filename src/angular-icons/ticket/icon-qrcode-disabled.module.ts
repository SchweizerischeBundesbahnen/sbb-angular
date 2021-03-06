import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-qrcode-disabled',
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
          <path stroke="#000" d="M3.1 3L21 20.9" />
          <path
            fill="#000"
            d="M5.999 12.001v-.997h2v1H6v.997H4.999v-1h1zm-2 2h1v2.003h-2v-1l1-.002v-1h-1v-2.001h1v2zm3-6h1v1h-1v1h-2V9H4V8H3V6h1v1h1v2h1.999v-.998h-1v-2l-1-.003V5h.586l2.004 2.003h-.59V8zM20 10.003h-1V8.001h2v1l-1 .002v1h1v2.001h-1v-2zm-1 5v.583l1 1v-1.582H18.418L18 14.586v-1.582h3v2h-1v-1h-1v1zM11 5.002v-1h1v-.998h1v2h-1v-.002h-1v1H9.415l-.998-.998H9v-.002H11zm3 5h-.586l-1-1H15v2.585l-1-1V10zM14 14v-.586l1 1V15H9V9h.586l1 1H10v4h4zm-3-1v-2h.585L13 12.414V13h-2zM7 2.995h3v1H7.41L7 3.586v-.59zm13 4.008V6.002h1v1.001h-1zm-2 5.998h-1.585L16 12.586v-.585h2v-.998h1v1h-1v.998zM2.999 2.995h.582l1.005 1.006-.587.002v1h-1V2.995zm10 4.008v-2h1v-1h1v.998h1V3.003h1v.998h1v1h-1v1l-3 .002v1h-1zM18 8.001v1h-1v.002h-1v-2h1v.998h1zm-1 13.004v-2h1v2h-1zm3-1.003v-.588l1 1v.59h-1v-.002h-1v-1h1zm0-14.999V4.001h-2v-1h2v.002h1v2h-1zm-2 12.998h.588l1 1H18v-1zm2.416-1H21v.585l-.584-.584zM17 7.002v-1h2v1h-2zm-6 14.001v-1.001h2v1.001h-2zm1-12.999h-.584l-1.002-1.002H11v-.998h1v2zm-2 10.999v-.997h1V20.005h-1v-.003H9v-1h1zm5 .003v.997h1v1h-1v.003h-1v-2h1zm-7.001-4.003v1h1v1h-2v-.998h-1v-1l2-.002zm2.001 2v-1h2v1h-2zm6-6.001v-1h2v1h-2zm-13.001 7v-1h1v1h-1zM14 8.002V7.001h1v1.001h-1zM3.999 12.001v-1h1v1h-1zm-1-1v-2h1v2h-1zm2 7.002v-1H7v1H4.999zm2 .999v-.998h2v1h-1v1.998h-1v-.997h-1v-1h1v-.003zm-3 0v1.003h2v1h-2v-.003h-1v-2h1zm2-4.998v-1h2v1h-2zM17 17.002v-.588l.588.588H17zm-1-1v-.588l.59.59H16v1.998h1v1h-2v-2h-1v1.002h-1v1h-1v-2h1v-1l3-.002z"
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
          <path stroke="#000" d="M4.65 4.5L31.5 31.35" />
          <path
            fill="#000"
            d="M8.998 18.002v-1.496h3v1.5H9v1.495H7.498v-1.5h1.5zm-3 3h1.5v3.004h-3v-1.5l1.5-.003v-1.5h-1.5v-3.002h1.5v3.002zm4.5-9h1.5v1.5h-1.5V15h-3v-1.5H6V12H4.5V9H6v1.5h1.5v3h2.998v-1.496h-1.5v-3L7.498 9V7.5h.88l3.005 3.004H10.5v1.498zM30 15.005h-1.5v-3.003h3v1.5l-1.5.003v1.5h1.5v3.001H30v-3.001zm-1.5 7.5H30v2.373l-1.5-1.5v-.873h-.873L27 21.878v-2.373h4.5v3H30v-1.5h-1.5v1.5zm-12-15.003v-1.5H18V4.505h1.5v3H18v-.003h-1.5v1.5h-2.377l-1.497-1.498h.873v-.002H16.5zM21 15h-.879l-1.5-1.5H22.5v3.88l-1.5-1.5V15zm0 6v-.88l1.5 1.5v.88h-9v-9h.879l1.5 1.5H15v6h6zm-4.5-1.5v-3h.878l2.122 2.121v.88h-3zM10.499 4.492H15v1.502h-3.886l-.615-.615v-.887zM30 10.505V9.002h1.5v1.502H30zm-3 8.997h-2.378L24 18.879v-.877h3v-1.497h1.5v1.5H27v1.497zM4.498 4.493h.873L6.88 6.002l-.88.003v1.5h-1.5V4.493zM19.5 10.505v-3H21v-1.5h1.5v1.497H24V4.505h1.5v1.497H27v1.5h-1.5v1.5l-4.5.003v1.5h-1.5zM27 12.002v1.5h-1.5v.003H24v-3h1.5v1.497H27zm-1.5 19.505v-3H27v3h-1.5zm4.5-1.504v-.882l1.5 1.5v.886H30v-.004h-1.5v-1.5H30zm0-22.498V6.002h-3v-1.5h3v.003h1.5v3H30zm-3 19.497h.882l1.5 1.5H27v-1.5zm3.623-1.5h.876v.876l-.876-.876zm-5.123-15v-1.5h3v1.5h-3zm-9 21.001v-1.502h3v1.502h-3zM18 12.005h-.875l-1.503-1.503h.877V9.005H18v3zm-3 16.498v-1.496h1.5v3H15v-.004h-1.5v-1.5H15zm7.5.004v1.495H24v1.5h-1.5v.005H21v-3h1.5zm-10.502-6.004v1.5h1.5v1.5h-3v-1.497h-1.5v-1.5l3-.003zm3.002 3v-1.5h3v1.5h-3zm9-9.002v-1.5h3v1.5h-3zm-19.502 10.5v-1.5h1.5v1.5h-1.5zM21 12.004v-1.502h1.5v1.502H21zM5.998 18.001v-1.5h1.5v1.5h-1.5zm-1.5-1.5v-3h1.5v3h-1.5zm3 10.503v-1.5H10.5v1.5H7.498zm3 1.499v-1.497h3v1.5h-1.5v2.997h-1.5v-1.496h-1.5v-1.5h1.5v-.004zm-4.5 0v1.504h3v1.5h-3v-.004h-1.5v-3h1.5zm3-7.497v-1.5h3v1.5h-3zM25.5 25.502v-.882l.882.882H25.5zm-1.5-1.5v-.881l.885.885H24v2.997h1.5v1.5h-3v-3H21v1.503h-1.5v1.5H18v-3h1.5v-1.5l4.5-.003z"
          />
        </g>
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQrcodeDisabledComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [IconQrcodeDisabledComponent],
  exports: [IconQrcodeDisabledComponent],
})
export class IconQrcodeDisabledModule {}
