import { Directive } from '@angular/core';

@Directive({
  selector: 'sbb-textexpand-expanded',
  host: {
    class: 'sbb-textexpand-expanded',
    '[attr.hidden]': '_hidden',
  },
})
export class SbbTextexpandExpanded {
  /** Describes if textexpand-expanded is hidden or not. Initially it is hidden. */
  _hidden = true;
}
