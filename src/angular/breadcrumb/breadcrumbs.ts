import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import {
  SbbMenuInheritedTriggerContext,
  SBB_MENU_INHERITED_TRIGGER_CONTEXT,
} from '@sbb-esta/angular/menu';

import { SbbBreadcrumb } from './breadcrumb';

const sbbMenuInheritedTriggerContext: SbbMenuInheritedTriggerContext = {
  type: 'breadcrumb',
  xPosition: 'after',
  xOffset: -30,
  yOffset: -14,
};

@Component({
  selector: 'sbb-breadcrumbs',
  exportAs: 'sbbBreadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sbb-breadcrumbs',
    role: 'navigation',
    'aria-label': 'Breadcrumb',
    '[class.sbb-breadcrumbs-expanded]': 'this.expanded',
  },
  providers: [
    { provide: SBB_MENU_INHERITED_TRIGGER_CONTEXT, useValue: sbbMenuInheritedTriggerContext },
  ],
})
export class SbbBreadcrumbs {
  /** Refers to BreadcrumbComponents instance. */
  @ContentChildren(SbbBreadcrumb) levels: QueryList<SbbBreadcrumb>;

  /** Whether the sbb-breadcrumbs are expanded or not */
  get expanded(): boolean {
    if (this.levels.length > 1) {
      return this._expanded;
    }
    // If there is only one level, always display all breadcrumb entries
    return true;
  }
  private _expanded = false;

  expand() {
    this._expanded = true;
  }
}
