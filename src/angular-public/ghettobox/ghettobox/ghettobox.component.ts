import { AnimationEvent } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SbbIconDirective } from '@sbb-esta/angular-core/icon-directive';
import { SbbLinkGeneratorResult } from '@sbb-esta/angular-core/models';

import { SbbGhettoboxContainerService } from '../ghettobox-container/ghettobox-container.service';

import { SBB_GHETTOBOX_ANIMATIONS } from './ghettobox-animations';
import { SbbGhettoboxConfig } from './ghettobox-ref';

/** Ghettobox states used for the animation */
export type SbbGhettoboxState = 'added' | 'deleted';

/** Ghettobox deleted custom event  */
export interface SbbGhettoboxDeletedEvent {
  ghettoboxState: SbbGhettoboxState;
  ghettoboxId: string;
}

let counter = 0;

@Component({
  selector: 'sbb-ghettobox',
  templateUrl: './ghettobox.component.html',
  styleUrls: ['./ghettobox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [SBB_GHETTOBOX_ANIMATIONS.addDelete],
  host: {
    class: 'sbb-ghettobox-outer-wrapper',
    tabindex: '-1',
    '[attr.id]': 'id',
    '[attr.hidden]': '!this.visible ? true : null',
    '[attr.aria-hidden]': '!this.visible ? true : null',
    '[attr.role]': 'this.visible ? "alert" : null',
  },
})
export class SbbGhettobox {
  @Input() id: string = `sbb-ghettobox-${counter++}`;

  visible: boolean = true;

  /** RouterLink as input directive or routerlink from ghettobox object when added by the Service */
  @Input()
  set routerLink(value: any[] | string) {
    this._routerLink = value;
  }
  get routerLink() {
    return (
      this._routerLink ||
      (this.ghettobox && this.ghettobox.link ? this.ghettobox.link.routerLink : '')
    );
  }
  private _routerLink: any[] | string = '';

  /** Retrieve the routerLink from the proper source */
  get link(): RouterLink | SbbLinkGeneratorResult {
    return this._routerLinkDirective || (this.ghettobox ? this.ghettobox.link : undefined);
  }

  /** Get/Set ghettobox state */
  private _ghettoboxState: SbbGhettoboxState = 'added';
  get ghettoboxState() {
    return this._ghettoboxState;
  }
  set ghettoboxState(value: SbbGhettoboxState) {
    this._ghettoboxState = value;
    this._changeDetector.markForCheck();
  }

  /** Emit a GhettoboxDeletedEvent after every ghettobox deletion */
  @Output()
  afterDelete: EventEmitter<SbbGhettoboxDeletedEvent> = new EventEmitter<SbbGhettoboxDeletedEvent>();

  /** Ghettobox Default icon as a TemplateRef if any are not specified */
  @ViewChild('defaultIcon', { static: true }) defaultIcon: TemplateRef<any>;

  /** Ghettobox Icon */
  set icon(value: TemplateRef<any>) {
    this._icon = value;
  }
  get icon(): TemplateRef<any> {
    return this._contentIcon || this._icon || this.defaultIcon;
  }
  private _icon: TemplateRef<any>;

  /**
   * icon placed in template
   * @docs-private
   */
  @ContentChild(SbbIconDirective, { read: TemplateRef }) _contentIcon: TemplateRef<any>;

  /** ghettobox object which construct the ghettobox when it's being created by the GhettoboxService */
  get ghettobox() {
    return this._ghettobox;
  }
  set ghettobox(value: SbbGhettoboxConfig) {
    this._ghettobox = value;

    if (this._ghettobox.icon) {
      this.icon = this._ghettobox.icon;
    }
    this._changeDetector.markForCheck();
  }
  private _ghettobox: SbbGhettoboxConfig;

  constructor(
    private _changeDetector: ChangeDetectorRef,
    private _ghettoboxContainerService: SbbGhettoboxContainerService,
    @Optional() @Self() private _routerLinkDirective: RouterLink
  ) {}

  /**
   * Delete itself
   * @param evt native dom event
   */
  delete(evt: any): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.destroy();
  }

  /**
   * The actual destroy action which set the state to 'deleted'
   * and remove itself from the attachedGhettoboxes collection stored within the GhettoboxService
   */
  destroy(): void {
    this.ghettoboxState = 'deleted';

    if (this._ghettoboxContainerService.hasContainerLoaded) {
      this._ghettoboxContainerService.deleteFromAttachedGhettoboxesCollection(this.id);
    }
  }

  /** @docs-private */
  handleAnimation(event: AnimationEvent) {
    const { phaseName, toState } = event;

    if (phaseName === 'done' && toState === 'deleted') {
      this._deletedPhase();
    }
  }

  /** @docs-private */
  private _deletedPhase() {
    this.visible = false;
    this._changeDetector.markForCheck();
    this.afterDelete.emit({
      ghettoboxState: this.ghettoboxState,
      ghettoboxId: this.id,
    });
  }
}
