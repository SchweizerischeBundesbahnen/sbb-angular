import { FocusMonitor } from '@angular/cdk/a11y';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IconDirective } from '@sbb-esta/angular-core/icon-directive';
import { RadioButton, RadioGroupDirective } from '@sbb-esta/angular-core/radio-button';
import { RadioButtonComponent } from '@sbb-esta/angular-public/radio-button';
import { Subject } from 'rxjs';

import { ToggleBase } from '../toggle.base';

// TODO: Inherit directly from RadioButton
@Component({
  selector: 'sbb-toggle-option',
  templateUrl: './toggle-option.component.html',
  styleUrls: ['./toggle-option.component.scss'],
  inputs: ['tabIndex'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleOptionComponent),
      multi: true
    },
    { provide: RadioButton, useExisting: ToggleOptionComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToggleOptionComponent extends RadioButtonComponent
  implements ToggleBase, AfterViewInit {
  /** @docs-private */
  @HostBinding('class.sbb-toggle-option') toggleOptionClass = true;

  /** Label of a sbb-toggle-option. */
  @Input() label: string;
  /** Information text in a sbb-toggle-option. */
  @Input() infoText?: string;

  /** @docs-private */
  @HostBinding('class.sbb-toggle-option-selected')
  get _isChecked() {
    return this.checked;
  }

  /** Identifier of sbb-toggle label. */
  get labelId() {
    return `${this.inputId}-label`;
  }

  /** Identifier of sbb-toggle content. */
  get contentId() {
    return `${this.inputId}-content`;
  }

  /**
   * Aria expanded value is true when a toggle button is selected.
   */
  get ariaExpandedValue(): boolean | undefined {
    return this.toggleOptionHasContent ? this.checked : undefined;
  }

  /**
   * Aria controls associated to toggle option content.
   */
  get ariaControls(): string | undefined {
    return this.toggleOptionHasContent ? this.contentId : undefined;
  }

  /**
   * Verifies the presence of text in a toggle option.
   */
  toggleOptionHasContent = true;

  /**
   * Observable on change of the value of a toggle option.
   * @deprecated Listen to (change).
   */
  valueChange$ = new Subject<any>();

  /**
   * Refers to the icon optionally contained in a toggle option.
   */
  @Input()
  @HostBinding('class.sbb-toggle-option-has-icon')
  @ContentChild(IconDirective, { read: TemplateRef })
  icon?: TemplateRef<any>;

  /**
   * Refers to the content of a toggle option.
   */
  @ViewChild('toggleOptionContentContainer')
  contentContainer: ElementRef<Element>;

  /**
   * Filter on a toggle option content.
   */
  filteredContentNodes: ChildNode[] = [];

  private _document: Document;

  constructor(
    @Optional() radioGroup: RadioGroupDirective,
    changeDetector: ChangeDetectorRef,
    elementRef: ElementRef,
    focusMonitor: FocusMonitor,
    radioDispatcher: UniqueSelectionDispatcher,
    @Inject(DOCUMENT) document: any
  ) {
    super(radioGroup, changeDetector, elementRef, focusMonitor, radioDispatcher);
    this._document = document;
    this.change.subscribe((e: any) => this.valueChange$.next(e));
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    const nodeList = this.contentContainer.nativeElement.childNodes;
    for (let k = 0; k < nodeList.length; k++) {
      const node = nodeList.item(k);
      if (node.nodeType !== this._document.COMMENT_NODE) {
        this.filteredContentNodes.push(node);
      }
    }

    if (!this.filteredContentNodes.length) {
      this.toggleOptionHasContent = false;
      this._changeDetector.detectChanges();
    }
  }

  /**
   * Set value of a toggle option to checked.
   * @param checked Value checked.
   * @deprecated Use .checked instead.
   */
  setToggleChecked(checked: boolean) {
    this.checked = checked;
  }
}
