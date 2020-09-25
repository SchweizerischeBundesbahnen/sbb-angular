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
  Inject,
  Input,
  Optional,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SbbIconDirective } from '@sbb-esta/angular-core/icon-directive';
import { SbbRadioButton, SbbRadioGroup } from '@sbb-esta/angular-core/radio-button';

@Component({
  selector: 'sbb-toggle-option',
  templateUrl: './toggle-option.component.html',
  styleUrls: ['./toggle-option.component.css'],
  inputs: ['tabIndex'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SbbToggleOption),
      multi: true,
    },
    { provide: SbbRadioButton, useExisting: SbbToggleOption },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sbb-toggle-option',
    '[class.sbb-toggle-option-selected]': 'this.checked',
    '[class.sbb-toggle-option-has-icon]': 'this.icon',
  },
})
export class SbbToggleOption extends SbbRadioButton implements AfterViewInit {
  /**
   * @docs-private
   * @deprecated internal use
   * */
  toggleOptionClass = true;

  /** Label of a sbb-toggle-option. */
  @Input() label: string;
  /** Information text in a sbb-toggle-option. */
  @Input() infoText?: string;

  /**
   * @docs-private
   * @deprecated internal use -> use property checked
   *  */
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
   * Refers to the icon optionally contained in a toggle option.
   */
  @Input()
  set icon(icon: TemplateRef<any> | null) {
    this._icon = icon;
  }
  get icon(): TemplateRef<any> | null {
    return this._contentIcon || this._icon;
  }
  private _icon: TemplateRef<any> | null = null;

  /**
   * icon placed in template
   * @docs-private
   */
  @ContentChild(SbbIconDirective, { read: TemplateRef })
  _contentIcon?: TemplateRef<any>;

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
    @Optional() radioGroup: SbbRadioGroup,
    changeDetector: ChangeDetectorRef,
    elementRef: ElementRef,
    focusMonitor: FocusMonitor,
    radioDispatcher: UniqueSelectionDispatcher,
    @Inject(DOCUMENT) document: any
  ) {
    super(radioGroup, changeDetector, elementRef, focusMonitor, radioDispatcher);
    this._document = document;
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
}
