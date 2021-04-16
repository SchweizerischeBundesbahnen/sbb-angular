import { Directive } from '@angular/core';

@Directive({
  selector: 'sbb-breadcrumb',
  exportAs: 'sbbBreadcrumb',
  host: {
    class: 'sbb-breadcrumb sbb-icon-fit',
    role: 'menuitem',
  },
})
export class SbbBreadcrumb {}
