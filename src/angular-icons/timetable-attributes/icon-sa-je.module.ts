import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { IconBase } from '@sbb-esta/angular-icons/core';

@Component({
  selector: 'sbb-icon-sa-je',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M9.901 1.037l-1.96 9.482c-.54 2.8-1.44 4.721-4.602 4.721-.78 0-1.58-.08-2.339-.28l.64-2.38c.34.12.78.22 1.28.22 1.48 0 1.96-1.08 2.22-2.36L7.1 1.036h2.801zM13.021 1.037h8.221l-.419 2.2h-5.462l-.721 3.441h4.883l-.441 2.201h-4.901l-.82 3.921h5.52l-.479 2.2h-8.321z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaJeComponent extends IconBase {
  constructor() {
    super({ width: '22px', height: '16px', ratio: 1.375 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaJeComponent],
  exports: [IconSaJeComponent],
})
export class IconSaJeModule {}
