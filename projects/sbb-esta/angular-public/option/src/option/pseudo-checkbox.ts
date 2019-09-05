import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

// TODO: Check if removable
export type SbbPseudoCheckboxState = 'unchecked' | 'checked';

@Component({
  selector: 'sbb-pseudo-checkbox',
  styleUrls: ['./option.component.scss'],
  templateUrl: './pseudo-checkbox.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PseudoCheckboxComponent {
  /** Display state of the checkbox. */
  @Input() state: 'unchecked' | 'checked' = 'unchecked';

  /** Whether the checkbox is disabled. */

  @Input()
  @HostBinding('class.sbb-pseudo-checkbox-disabled')
  disabled = false;

  @HostBinding('class.sbb-pseudo-checkbox-checked')
  get checked(): boolean {
    return this.state === 'checked';
  }

  @HostBinding('class.sbb-pseudo-checkbox') baseCssClass = true;
}
