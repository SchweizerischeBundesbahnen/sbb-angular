import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ContentChildren,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
} from '@angular/core';

import { SbbGhettoboxConfig, SbbGhettoboxRef } from '../ghettobox/ghettobox-ref';
import { SbbGhettobox } from '../ghettobox/ghettobox.component';

import { SbbGhettoboxContainerService } from './ghettobox-container.service';

let nextId = 0;

/**
 * `<sbb-ghettobox-container>`
 *
 * This component is used for handle a collection of ghettoboxes via the GhettoboxService
 */
@Component({
  selector: 'sbb-ghettobox-container',
  templateUrl: './ghettobox-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sbb-ghettobox-container',
    '[id]': 'id',
    role: 'region',
    'aria-live': 'assertive',
    'aria-relevant': 'all',
    tabindex: '-1',
  },
})
export class SbbGhettoboxContainer extends BasePortalOutlet implements AfterContentInit, OnDestroy {
  @Input() id = `sbb-ghettobox-container-${nextId++}`;

  /** The portal where to attach the ghettoboxes generated by the service */
  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet;

  /** Initial entries projected from the consumer.   */
  @ContentChildren(SbbGhettobox) initialGhettoboxes: QueryList<SbbGhettobox>;

  constructor(private _ghettoboxContainerService: SbbGhettoboxContainerService) {
    super();
    if (!this._ghettoboxContainerService.hasContainerLoaded) {
      // Load container reference into GhettoboxService
      this._ghettoboxContainerService.loadContainer(this);
    } else {
      throw Error('Only one sbb-ghettobox-container is allowed at a time');
    }
  }

  ngAfterContentInit() {
    // Load inital entries into the attached ghettobox collection kept in the GhettoboxService
    this._ghettoboxContainerService.loadInitialGhettoboxes(
      this.initialGhettoboxes.toArray().map((g) => new SbbGhettoboxRef(g))
    );
  }

  ngOnDestroy() {
    this._ghettoboxContainerService.clearAll();
    this._ghettoboxContainerService.clearContainer();
  }

  /**
   * Attach a ComponentPortal as content to this ghettobox container.
   * @param portal Portal to be attached as the ghettobox content.
   */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this.portalOutlet.attachComponentPortal(portal);
  }

  /**
   * Attach a TemplatePortal as content to this ghettobox container.
   * @param portal Portal to be attached as the ghettobox content.
   */
  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this.portalOutlet.attachTemplatePortal(portal);
  }

  /** Creates a new ComponentPortal of GhettoboxComponent and attach it to the cdkPortalOutlet */
  createGhettobox(ghettobox: SbbGhettoboxConfig): SbbGhettoboxRef {
    const ghettoboxComponentPortal = new ComponentPortal(SbbGhettobox);
    const ghettoboxComponentRef = this.attachComponentPortal(ghettoboxComponentPortal);
    ghettoboxComponentRef.instance.ghettobox = ghettobox;

    return new SbbGhettoboxRef(ghettoboxComponentRef);
  }
}
