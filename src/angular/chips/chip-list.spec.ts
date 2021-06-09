import { animate, style, transition, trigger } from '@angular/animations';
import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  A,
  BACKSPACE,
  DELETE,
  END,
  ENTER,
  HOME,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
} from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  NgZone,
  Provider,
  QueryList,
  Type,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import {
  createKeyboardEvent,
  dispatchEvent,
  dispatchFakeEvent,
  dispatchKeyboardEvent,
  dispatchMouseEvent,
  MockNgZone,
  typeInElement,
} from '@sbb-esta/angular/core/testing';
import { SbbFormFieldModule, SbbInputModule } from '@sbb-esta/angular/form-field';

import { SbbChip, SbbChipEvent, SbbChipRemove } from './chip';
import { SbbChipInputEvent } from './chip-input';
import { SbbChipList } from './chip-list';
import { SbbChipsModule } from './chips.module';

describe('SbbChipList', () => {
  let fixture: ComponentFixture<any>;
  let chipListDebugElement: DebugElement;
  let chipListNativeElement: HTMLElement;
  let chipListInstance: SbbChipList;
  let testComponent: StandardChipList;
  let chips: QueryList<SbbChip>;
  let manager: FocusKeyManager<SbbChip>;
  let zone: MockNgZone;

  describe('StandardChipList', () => {
    describe('basic behaviors', () => {
      beforeEach(() => {
        setupStandardList();
      });

      it('should add the `sbb-chip-list` class', () => {
        expect(chipListNativeElement.classList).toContain('sbb-chip-list');
      });

      it('should not have the aria-selected attribute when is not selectable', () => {
        testComponent.selectable = false;
        fixture.detectChanges();

        const chipsValid = chips
          .toArray()
          .every(
            (chip) =>
              !chip.selectable && !chip._elementRef.nativeElement.hasAttribute('aria-selected')
          );

        expect(chipsValid).toBe(true);
      });

      it('should toggle the chips disabled state based on whether it is disabled', () => {
        expect(chips.toArray().every((chip) => chip.disabled)).toBe(false);

        chipListInstance.disabled = true;
        fixture.detectChanges();

        expect(chips.toArray().every((chip) => chip.disabled)).toBe(true);

        chipListInstance.disabled = false;
        fixture.detectChanges();

        expect(chips.toArray().every((chip) => chip.disabled)).toBe(false);
      });

      it('should disable a chip that is added after the list became disabled', fakeAsync(() => {
        expect(chips.toArray().every((chip) => chip.disabled)).toBe(false);

        chipListInstance.disabled = true;
        fixture.detectChanges();

        expect(chips.toArray().every((chip) => chip.disabled)).toBe(true);

        fixture.componentInstance.chips.push(5, 6);
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        expect(chips.toArray().every((chip) => chip.disabled)).toBe(true);
      }));

      it('should preserve the disabled state of a chip if the list gets re-enabled', () => {
        const chipArray = chips.toArray();

        chipArray[2].disabled = true;
        fixture.detectChanges();

        expect(chips.toArray().map((chip) => chip.disabled)).toEqual([
          false,
          false,
          true,
          false,
          false,
        ]);

        chipListInstance.disabled = true;
        fixture.detectChanges();

        expect(chips.toArray().map((chip) => chip.disabled)).toEqual([
          true,
          true,
          true,
          true,
          true,
        ]);

        chipListInstance.disabled = false;
        fixture.detectChanges();

        expect(chips.toArray().map((chip) => chip.disabled)).toEqual([
          false,
          false,
          true,
          false,
          false,
        ]);
      });
    });

    describe('with selected chips', () => {
      beforeEach(() => {
        fixture = createComponent(SelectedChipList);
        fixture.detectChanges();
        chipListDebugElement = fixture.debugElement.query(By.directive(SbbChipList))!;
        chipListNativeElement = chipListDebugElement.nativeElement;
      });

      it('should not override chips selected', () => {
        const instanceChips = fixture.componentInstance.chips.toArray();

        expect(instanceChips[0].selected).toBe(true, 'Expected first option to be selected.');
        expect(instanceChips[1].selected).toBe(false, 'Expected second option to be not selected.');
        expect(instanceChips[2].selected).toBe(true, 'Expected third option to be selected.');
      });

      it('should have role listbox', () => {
        expect(chipListNativeElement.getAttribute('role')).toBe('listbox');
      });

      it('should not have role when empty', () => {
        fixture.componentInstance.foods = [];
        fixture.detectChanges();

        expect(chipListNativeElement.getAttribute('role')).toBeNull('Expect no role attribute');
      });

      it('should not have aria-required when it has no role', () => {
        fixture.componentInstance.foods = [];
        fixture.detectChanges();

        expect(chipListNativeElement.hasAttribute('role')).toBe(false);
        expect(chipListNativeElement.hasAttribute('aria-required')).toBe(false);
      });
    });

    describe('focus behaviors', () => {
      beforeEach(() => {
        setupStandardList();
        manager = chipListInstance._keyManager;
      });

      it('should focus the first chip on focus', () => {
        chipListInstance.focus();
        fixture.detectChanges();

        expect(manager.activeItemIndex).toBe(0);
      });

      it('should watch for chip focus', () => {
        const array = chips.toArray();
        const lastIndex = array.length - 1;
        const lastItem = array[lastIndex];

        lastItem.focus();
        fixture.detectChanges();

        expect(manager.activeItemIndex).toBe(lastIndex);
      });

      it('should be able to become focused when disabled', () => {
        expect(chipListInstance.focused).toBe(false, 'Expected list to not be focused.');

        chipListInstance.disabled = true;
        fixture.detectChanges();

        chipListInstance.focus();
        fixture.detectChanges();

        expect(chipListInstance.focused).toBe(false, 'Expected list to continue not to be focused');
      });

      it('should remove the tabindex from the list if it is disabled', () => {
        expect(chipListNativeElement.getAttribute('tabindex')).toBeTruthy();

        chipListInstance.disabled = true;
        fixture.detectChanges();

        expect(chipListNativeElement.hasAttribute('tabindex')).toBeFalsy();
      });

      describe('on chip destroy', () => {
        it('should focus the next item', () => {
          const array = chips.toArray();
          const midItem = array[2];

          // Focus the middle item
          midItem.focus();

          // Destroy the middle item
          testComponent.chips.splice(2, 1);
          fixture.detectChanges();

          // It focuses the 4th item (now at index 2)
          expect(manager.activeItemIndex).toEqual(2);
        });

        it('should focus the previous item', () => {
          const array = chips.toArray();
          const lastIndex = array.length - 1;
          const lastItem = array[lastIndex];

          // Focus the last item
          lastItem.focus();

          // Destroy the last item
          testComponent.chips.pop();
          fixture.detectChanges();

          // It focuses the next-to-last item
          expect(manager.activeItemIndex).toEqual(lastIndex - 1);
        });

        it('should not focus if chip list is not focused', () => {
          const array = chips.toArray();
          const midItem = array[2];

          // Focus and blur the middle item
          midItem.focus();
          midItem._blur();
          zone.simulateZoneExit();

          // Destroy the middle item
          testComponent.chips.splice(2, 1);
          fixture.detectChanges();

          // Should not have focus
          expect(chipListInstance._keyManager.activeItemIndex).toEqual(-1);
        });

        it('should focus the list if the last focused item is removed', () => {
          testComponent.chips = [0];

          spyOn(chipListInstance, 'focus');
          chips.last.focus();

          testComponent.chips.pop();
          fixture.detectChanges();

          expect(chipListInstance.focus).toHaveBeenCalled();
        });

        it(
          'should move focus to the last chip when the focused chip was deleted inside a' +
            'component with animations',
          fakeAsync(() => {
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(StandardChipListWithAnimations, [], BrowserAnimationsModule);
            fixture.detectChanges();

            chipListDebugElement = fixture.debugElement.query(By.directive(SbbChipList))!;
            chipListNativeElement = chipListDebugElement.nativeElement;
            chipListInstance = chipListDebugElement.componentInstance;
            testComponent = fixture.debugElement.componentInstance;
            chips = chipListInstance.chips;

            chips.last.focus();
            fixture.detectChanges();

            expect(chipListInstance._keyManager.activeItemIndex).toBe(chips.length - 1);

            dispatchKeyboardEvent(chips.last._elementRef.nativeElement, 'keydown', BACKSPACE);
            fixture.detectChanges();
            tick(500);

            expect(chipListInstance._keyManager.activeItemIndex).toBe(chips.length - 1);
          })
        );
      });
    });

    describe('keyboard behavior', () => {
      describe('LTR (default)', () => {
        beforeEach(() => {
          setupStandardList();
          manager = chipListInstance._keyManager;
        });

        it('should focus previous item when press LEFT ARROW', () => {
          const nativeChips = chipListNativeElement.querySelectorAll('sbb-chip');
          const lastNativeChip = nativeChips[nativeChips.length - 1] as HTMLElement;

          const array = chips.toArray();
          const lastIndex = array.length - 1;
          const lastItem = array[lastIndex];

          // Focus the last item in the array
          lastItem.focus();
          expect(manager.activeItemIndex).toEqual(lastIndex);

          // Press the LEFT arrow
          dispatchKeyboardEvent(lastNativeChip, 'keydown', LEFT_ARROW);
          chipListInstance._blur(); // Simulate focus leaving the list and going to the chip.
          fixture.detectChanges();

          // It focuses the next-to-last item
          expect(manager.activeItemIndex).toEqual(lastIndex - 1);
        });

        it('should focus next item when press RIGHT ARROW', () => {
          const nativeChips = chipListNativeElement.querySelectorAll('sbb-chip');
          const firstNativeChip = nativeChips[0] as HTMLElement;

          const array = chips.toArray();
          const firstItem = array[0];

          // Focus the last item in the array
          firstItem.focus();
          expect(manager.activeItemIndex).toEqual(0);

          // Press the RIGHT arrow
          dispatchKeyboardEvent(firstNativeChip, 'keydown', RIGHT_ARROW);
          chipListInstance._blur(); // Simulate focus leaving the list and going to the chip.
          fixture.detectChanges();

          // It focuses the next-to-last item
          expect(manager.activeItemIndex).toEqual(1);
        });

        it('should not handle arrow key events from non-chip elements', () => {
          const initialActiveIndex = manager.activeItemIndex;

          dispatchKeyboardEvent(chipListNativeElement, 'keydown', RIGHT_ARROW);
          fixture.detectChanges();

          expect(manager.activeItemIndex).toBe(
            initialActiveIndex,
            'Expected focused item not to have changed.'
          );
        });

        it('should focus the first item when pressing HOME', () => {
          const nativeChips = chipListNativeElement.querySelectorAll('sbb-chip');
          const lastNativeChip = nativeChips[nativeChips.length - 1] as HTMLElement;
          const homeEvent = createKeyboardEvent('keydown', HOME);
          const array = chips.toArray();
          const lastItem = array[array.length - 1];

          lastItem.focus();
          expect(manager.activeItemIndex).toBe(array.length - 1);

          dispatchEvent(lastNativeChip, homeEvent);
          fixture.detectChanges();

          expect(manager.activeItemIndex).toBe(0);
          expect(homeEvent.defaultPrevented).toBe(true);
        });

        it('should focus the last item when pressing END', () => {
          const nativeChips = chipListNativeElement.querySelectorAll('sbb-chip');
          const endEvent = createKeyboardEvent('keydown', END);

          expect(manager.activeItemIndex).toBe(-1);

          dispatchEvent(nativeChips[0], endEvent);
          fixture.detectChanges();

          expect(manager.activeItemIndex).toBe(chips.length - 1);
          expect(endEvent.defaultPrevented).toBe(true);
        });
      });
    });
  });

  describe('FormFieldChipList', () => {
    beforeEach(() => {
      setupInputList();
    });

    describe('keyboard behavior', () => {
      beforeEach(() => {
        manager = chipListInstance._keyManager;
      });

      it('should maintain focus if the active chip is deleted', () => {
        const secondChip = fixture.nativeElement.querySelectorAll('.sbb-chip')[1];

        secondChip.focus();
        fixture.detectChanges();

        expect(chipListInstance.chips.toArray().findIndex((chip) => chip._hasFocus)).toBe(1);

        dispatchKeyboardEvent(secondChip, 'keydown', DELETE);
        fixture.detectChanges();

        expect(chipListInstance.chips.toArray().findIndex((chip) => chip._hasFocus)).toBe(1);
      });

      describe('when the input has focus', () => {
        it('should not focus the last chip when press DELETE', () => {
          const nativeInput = fixture.nativeElement.querySelector('input');

          // Focus the input
          nativeInput.focus();
          expect(manager.activeItemIndex).toBe(-1);

          // Press the DELETE key
          dispatchKeyboardEvent(nativeInput, 'keydown', DELETE);
          fixture.detectChanges();

          // It doesn't focus the last chip
          expect(manager.activeItemIndex).toEqual(-1);
        });

        it('should focus the last chip when press BACKSPACE', () => {
          const nativeInput = fixture.nativeElement.querySelector('input');

          // Focus the input
          nativeInput.focus();
          expect(manager.activeItemIndex).toBe(-1);

          // Press the BACKSPACE key
          dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
          fixture.detectChanges();

          // It focuses the last chip
          expect(manager.activeItemIndex).toEqual(chips.length - 1);
        });
      });
    });

    it('should complete the stateChanges stream on destroy', () => {
      const spy = jasmine.createSpy('stateChanges complete');
      const subscription = chipListInstance.stateChanges.subscribe({ complete: spy });

      fixture.destroy();
      expect(spy).toHaveBeenCalled();
      subscription.unsubscribe();
    });

    it('should point the label id to the chip input', () => {
      const label = fixture.nativeElement.querySelector('label');
      const input = fixture.nativeElement.querySelector('input');

      fixture.detectChanges();

      expect(label.getAttribute('for')).toBeTruthy();
      expect(label.getAttribute('for')).toBe(input.getAttribute('id'));
      expect(label.getAttribute('aria-owns')).toBe(input.getAttribute('id'));
    });
  });

  describe('with chip remove', () => {
    let chipList: SbbChipList;
    let chipRemoveDebugElements: DebugElement[];

    beforeEach(() => {
      fixture = createComponent(ChipListWithRemove);
      fixture.detectChanges();

      chipList = fixture.debugElement.query(By.directive(SbbChipList))!.componentInstance;
      chipRemoveDebugElements = fixture.debugElement.queryAll(By.directive(SbbChipRemove));
      chips = chipList.chips;
    });

    it('should properly focus next item if chip is removed through click', () => {
      chips.toArray()[2].focus();

      // Destroy the third focused chip by dispatching a bubbling click event on the
      // associated chip remove element.
      dispatchMouseEvent(chipRemoveDebugElements[2].nativeElement, 'click');
      fixture.detectChanges();

      expect(chips.toArray()[2].value).not.toBe(2, 'Expected the third chip to be removed.');
      expect(chipList._keyManager.activeItemIndex).toBe(2);
    });
  });

  describe('selection logic', () => {
    let formField: HTMLElement;
    let nativeChips: HTMLElement[];

    beforeEach(() => {
      fixture = createComponent(BasicChipList);
      fixture.detectChanges();

      formField = fixture.debugElement.query(By.css('.sbb-form-field'))!.nativeElement;
      nativeChips = fixture.debugElement
        .queryAll(By.css('sbb-chip'))
        .map((chip) => chip.nativeElement);

      chipListDebugElement = fixture.debugElement.query(By.directive(SbbChipList))!;
      chipListInstance = chipListDebugElement.componentInstance;
      chips = chipListInstance.chips;
    });

    it('should remove selection if chip has been removed', fakeAsync(() => {
      const instanceChips = fixture.componentInstance.chips;
      const chipList = fixture.componentInstance.chipList;
      const firstChip = nativeChips[0];
      dispatchKeyboardEvent(firstChip, 'keydown', SPACE);
      fixture.detectChanges();

      expect(instanceChips.first.selected).toBe(true, 'Expected first option to be selected.');
      expect(chipList.selected).toBe(chips.first, 'Expected first option to be selected.');

      fixture.componentInstance.foods = [];
      fixture.detectChanges();
      tick();

      expect(chipList.selected).toBe(
        undefined,
        'Expected selection to be removed when option no longer exists.'
      );
    }));

    it('should select an option that was added after initialization', () => {
      fixture.componentInstance.foods.push({ viewValue: 'Potatoes', value: 'potatoes-8' });
      fixture.detectChanges();

      nativeChips = fixture.debugElement
        .queryAll(By.css('sbb-chip'))
        .map((chip) => chip.nativeElement);
      const lastChip = nativeChips[8];
      dispatchKeyboardEvent(lastChip, 'keydown', SPACE);
      fixture.detectChanges();

      expect(fixture.componentInstance.chipList.value).toContain(
        'potatoes-8',
        'Expect value contain the value of the last option'
      );
      expect(fixture.componentInstance.chips.last.selected).toBeTruthy(
        'Expect last option selected'
      );
    });

    it('should not select disabled chips', () => {
      const array = chips.toArray();
      const disabledChip = nativeChips[2];
      dispatchKeyboardEvent(disabledChip, 'keydown', SPACE);
      fixture.detectChanges();

      expect(fixture.componentInstance.chipList.value).toBeUndefined(
        'Expect value to be undefined'
      );
      expect(array[2].selected).toBeFalsy('Expect disabled chip not selected');
      expect(fixture.componentInstance.chipList.selected).toBeUndefined('Expect no selected chips');
    });
  });

  describe('forms integration', () => {
    let nativeChips: HTMLElement[];

    describe('single selection', () => {
      beforeEach(() => {
        fixture = createComponent(BasicChipList);
        fixture.detectChanges();

        nativeChips = fixture.debugElement
          .queryAll(By.css('sbb-chip'))
          .map((chip) => chip.nativeElement);
        chips = fixture.componentInstance.chips;
      });

      it('should take an initial view value with reactive forms', () => {
        fixture.componentInstance.control = new FormControl('pizza-1');
        fixture.detectChanges();

        const array = chips.toArray();

        expect(array[1].selected).toBeTruthy('Expect pizza-1 chip to be selected');

        dispatchKeyboardEvent(nativeChips[1], 'keydown', SPACE);
        fixture.detectChanges();

        expect(array[1].selected).toBeFalsy('Expect chip to be not selected after toggle selected');
      });

      it('should set the view value from the form', () => {
        const chipList = fixture.componentInstance.chipList;
        const array = chips.toArray();

        expect(chipList.value).toBeFalsy('Expect chip list to have no initial value');

        fixture.componentInstance.control.setValue('pizza-1');
        fixture.detectChanges();

        expect(array[1].selected).toBeTruthy('Expect chip to be selected');
      });

      it('should update the form value when the view changes', () => {
        expect(fixture.componentInstance.control.value).toEqual(
          null,
          `Expected the control's value to be empty initially.`
        );

        dispatchKeyboardEvent(nativeChips[0], 'keydown', SPACE);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toEqual(
          'steak-0',
          `Expected control's value to be set to the new option.`
        );
      });

      it('should clear the selection when a nonexistent option value is selected', () => {
        const array = chips.toArray();

        fixture.componentInstance.control.setValue('pizza-1');
        fixture.detectChanges();

        expect(array[1].selected).toBeTruthy(`Expected chip with the value to be selected.`);

        fixture.componentInstance.control.setValue('gibberish');

        fixture.detectChanges();

        expect(array[1].selected).toBeFalsy(`Expected chip with the old value not to be selected.`);
      });

      it('should clear the selection when the control is reset', () => {
        const array = chips.toArray();

        fixture.componentInstance.control.setValue('pizza-1');
        fixture.detectChanges();

        fixture.componentInstance.control.reset();
        fixture.detectChanges();

        expect(array[1].selected).toBeFalsy(`Expected chip with the old value not to be selected.`);
      });

      it('should set the control to touched when the chip list is touched', () => {
        expect(fixture.componentInstance.control.touched).toBe(
          false,
          'Expected the control to start off as untouched.'
        );

        const nativeChipList = fixture.debugElement.query(By.css('.sbb-chip-list'))!.nativeElement;
        dispatchFakeEvent(nativeChipList, 'blur');

        expect(fixture.componentInstance.control.touched).toBe(
          true,
          'Expected the control to be touched.'
        );
      });

      it('should not set touched when a disabled chip list is touched', () => {
        expect(fixture.componentInstance.control.touched).toBe(
          false,
          'Expected the control to start off as untouched.'
        );

        fixture.componentInstance.control.disable();
        const nativeChipList = fixture.debugElement.query(By.css('.sbb-chip-list'))!.nativeElement;
        dispatchFakeEvent(nativeChipList, 'blur');

        expect(fixture.componentInstance.control.touched).toBe(
          false,
          'Expected the control to stay untouched.'
        );
      });

      it("should set the control to dirty when the chip list's value changes in the DOM", () => {
        expect(fixture.componentInstance.control.dirty).toEqual(
          false,
          `Expected control to start out pristine.`
        );

        dispatchKeyboardEvent(nativeChips[1], 'keydown', SPACE);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.dirty).toEqual(
          true,
          `Expected control to be dirty after value was changed by user.`
        );
      });

      it('should not set the control to dirty when the value changes programmatically', () => {
        expect(fixture.componentInstance.control.dirty).toEqual(
          false,
          `Expected control to start out pristine.`
        );

        fixture.componentInstance.control.setValue('pizza-1');

        expect(fixture.componentInstance.control.dirty).toEqual(
          false,
          `Expected control to stay pristine after programmatic change.`
        );
      });

      it('should be able to programmatically select a falsy option', () => {
        fixture.destroy();
        TestBed.resetTestingModule();

        const falsyFixture = createComponent(FalsyValueChipList);
        falsyFixture.detectChanges();

        falsyFixture.componentInstance.control.setValue([0]);
        falsyFixture.detectChanges();
        falsyFixture.detectChanges();

        expect(falsyFixture.componentInstance.chips.first.selected).toBe(
          true,
          'Expected first option to be selected'
        );
      });

      it('should not focus the active chip when the value is set programmatically', () => {
        const chipArray = fixture.componentInstance.chips.toArray();

        spyOn(chipArray[4], 'focus').and.callThrough();

        fixture.componentInstance.control.setValue('chips-4');
        fixture.detectChanges();

        expect(chipArray[4].focus).not.toHaveBeenCalled();
      });

      it('should blur the form field when the active chip is blurred', fakeAsync(() => {
        const formField: HTMLElement = fixture.nativeElement.querySelector('.sbb-form-field');

        nativeChips[0].focus();
        fixture.detectChanges();

        expect(formField.classList).toContain('sbb-focused');

        nativeChips[0].blur();
        fixture.detectChanges();
        zone.simulateZoneExit();
        fixture.detectChanges();

        expect(formField.classList).not.toContain('sbb-focused');
      }));
    });

    describe('multiple selection', () => {
      beforeEach(() => {
        fixture = createComponent(MultiSelectionChipList);
        fixture.detectChanges();

        nativeChips = fixture.debugElement
          .queryAll(By.css('sbb-chip'))
          .map((chip) => chip.nativeElement);
        chips = fixture.componentInstance.chips;
      });

      it('should take an initial view value with reactive forms', () => {
        fixture.componentInstance.control = new FormControl(['pizza-1']);
        fixture.detectChanges();

        const array = chips.toArray();

        expect(array[1].selected).toBeTruthy('Expect pizza-1 chip to be selected');

        dispatchKeyboardEvent(nativeChips[1], 'keydown', SPACE);
        fixture.detectChanges();

        expect(array[1].selected).toBeFalsy('Expect chip to be not selected after toggle selected');
      });

      it('should set the view value from the form', () => {
        const chipList = fixture.componentInstance.chipList;
        const array = chips.toArray();

        expect(chipList.value).toBeFalsy('Expect chip list to have no initial value');

        fixture.componentInstance.control.setValue(['pizza-1']);
        fixture.detectChanges();

        expect(array[1].selected).toBeTruthy('Expect chip to be selected');
      });

      it('should update the form value when the view changes', () => {
        expect(fixture.componentInstance.control.value).toEqual(
          null,
          `Expected the control's value to be empty initially.`
        );

        dispatchKeyboardEvent(nativeChips[0], 'keydown', SPACE);
        fixture.detectChanges();

        expect(fixture.componentInstance.control.value).toEqual(
          ['steak-0'],
          `Expected control's value to be set to the new option.`
        );
      });

      it('should clear the selection when a nonexistent option value is selected', () => {
        const array = chips.toArray();

        fixture.componentInstance.control.setValue(['pizza-1']);
        fixture.detectChanges();

        expect(array[1].selected).toBeTruthy(`Expected chip with the value to be selected.`);

        fixture.componentInstance.control.setValue(['gibberish']);

        fixture.detectChanges();

        expect(array[1].selected).toBeFalsy(`Expected chip with the old value not to be selected.`);
      });

      it('should clear the selection when the control is reset', () => {
        const array = chips.toArray();

        fixture.componentInstance.control.setValue(['pizza-1']);
        fixture.detectChanges();

        fixture.componentInstance.control.reset();
        fixture.detectChanges();

        expect(array[1].selected).toBeFalsy(`Expected chip with the old value not to be selected.`);
      });
    });

    it(
      'should keep the disabled state in sync if the form group is swapped and ' +
        'disabled at the same time',
      fakeAsync(() => {
        fixture = createComponent(ChipListInsideDynamicFormGroup);
        fixture.detectChanges();
        const instance = fixture.componentInstance;
        const list: SbbChipList = instance.chipList;

        expect(list.disabled).toBe(false);
        expect(list.chips.toArray().every((chip) => chip.disabled)).toBe(false);

        instance.assignGroup(true);
        fixture.detectChanges();

        expect(list.disabled).toBe(true);
        expect(list.chips.toArray().every((chip) => chip.disabled)).toBe(true);
      })
    );
  });

  describe('chip list with chip input', () => {
    let nativeChips: HTMLElement[];

    beforeEach(() => {
      fixture = createComponent(InputChipList);
      fixture.detectChanges();

      nativeChips = fixture.debugElement
        .queryAll(By.css('sbb-chip'))
        .map((chip) => chip.nativeElement);
    });

    it('should take an initial view value with reactive forms', () => {
      fixture.componentInstance.control = new FormControl(['pizza-1']);
      fixture.detectChanges();

      const array = fixture.componentInstance.chips.toArray();

      expect(array[1].selected).toBeTruthy('Expect pizza-1 chip to be selected');

      dispatchKeyboardEvent(nativeChips[1], 'keydown', SPACE);
      fixture.detectChanges();

      expect(array[1].selected).toBeFalsy('Expect chip to be not selected after toggle selected');
    });

    it('should set the view value from the form', () => {
      const array = fixture.componentInstance.chips.toArray();

      expect(array[1].selected).toBeFalsy('Expect chip to not be selected');

      fixture.componentInstance.control.setValue(['pizza-1']);
      fixture.detectChanges();

      expect(array[1].selected).toBeTruthy('Expect chip to be selected');
    });

    it('should update the form value when the view changes', () => {
      expect(fixture.componentInstance.control.value).toEqual(
        null,
        `Expected the control's value to be empty initially.`
      );

      dispatchKeyboardEvent(nativeChips[0], 'keydown', SPACE);
      fixture.detectChanges();

      expect(fixture.componentInstance.control.value).toEqual(
        ['steak-0'],
        `Expected control's value to be set to the new option.`
      );
    });

    it('should clear the selection when a nonexistent option value is selected', () => {
      const array = fixture.componentInstance.chips.toArray();

      fixture.componentInstance.control.setValue(['pizza-1']);
      fixture.detectChanges();

      expect(array[1].selected).toBeTruthy(`Expected chip with the value to be selected.`);

      fixture.componentInstance.control.setValue(['gibberish']);

      fixture.detectChanges();

      expect(array[1].selected).toBeFalsy(`Expected chip with the old value not to be selected.`);
    });

    it('should clear the selection when the control is reset', () => {
      const array = fixture.componentInstance.chips.toArray();

      fixture.componentInstance.control.setValue(['pizza-1']);
      fixture.detectChanges();

      fixture.componentInstance.control.reset();
      fixture.detectChanges();

      expect(array[1].selected).toBeFalsy(`Expected chip with the old value not to be selected.`);
    });

    it('should set the control to touched when the chip list is touched', fakeAsync(() => {
      expect(fixture.componentInstance.control.touched).toBe(
        false,
        'Expected the control to start off as untouched.'
      );

      const nativeChipList = fixture.debugElement.query(By.css('.sbb-chip-list'))!.nativeElement;

      dispatchFakeEvent(nativeChipList, 'blur');
      tick();

      expect(fixture.componentInstance.control.touched).toBe(
        true,
        'Expected the control to be touched.'
      );
    }));

    it('should not set touched when a disabled chip list is touched', () => {
      expect(fixture.componentInstance.control.touched).toBe(
        false,
        'Expected the control to start off as untouched.'
      );

      fixture.componentInstance.control.disable();
      const nativeChipList = fixture.debugElement.query(By.css('.sbb-chip-list'))!.nativeElement;
      dispatchFakeEvent(nativeChipList, 'blur');

      expect(fixture.componentInstance.control.touched).toBe(
        false,
        'Expected the control to stay untouched.'
      );
    });

    it("should set the control to dirty when the chip list's value changes in the DOM", () => {
      expect(fixture.componentInstance.control.dirty).toEqual(
        false,
        `Expected control to start out pristine.`
      );

      dispatchKeyboardEvent(nativeChips[1], 'keydown', SPACE);
      fixture.detectChanges();

      expect(fixture.componentInstance.control.dirty).toEqual(
        true,
        `Expected control to be dirty after value was changed by user.`
      );
    });

    it('should not set the control to dirty when the value changes programmatically', () => {
      expect(fixture.componentInstance.control.dirty).toEqual(
        false,
        `Expected control to start out pristine.`
      );

      fixture.componentInstance.control.setValue(['pizza-1']);

      expect(fixture.componentInstance.control.dirty).toEqual(
        false,
        `Expected control to stay pristine after programmatic change.`
      );
    });

    it('should keep focus on the input after adding the first chip', fakeAsync(() => {
      const nativeInput = fixture.nativeElement.querySelector('input');
      const chipEls = Array.from<HTMLElement>(
        fixture.nativeElement.querySelectorAll('.sbb-chip')
      ).reverse();

      // Remove the chips via backspace to simulate the user removing them.
      chipEls.forEach((chip) => {
        chip.focus();
        dispatchKeyboardEvent(chip, 'keydown', BACKSPACE);
        fixture.detectChanges();
        tick();
      });

      nativeInput.focus();
      expect(fixture.componentInstance.foods).toEqual([], 'Expected all chips to be removed.');
      expect(document.activeElement).toBe(nativeInput, 'Expected input to be focused.');

      typeInElement(nativeInput, '123');
      fixture.detectChanges();
      dispatchKeyboardEvent(nativeInput, 'keydown', ENTER);
      fixture.detectChanges();
      tick();

      expect(document.activeElement).toBe(nativeInput, 'Expected input to remain focused.');
    }));

    it('should set aria-invalid if the form field is invalid', () => {
      fixture.componentInstance.control = new FormControl(undefined, [Validators.required]);
      fixture.detectChanges();

      const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

      expect(input.getAttribute('aria-invalid')).toBe('true');

      fixture.componentInstance.chips.first.selectViaInteraction();
      fixture.detectChanges();

      expect(input.getAttribute('aria-invalid')).toBe('false');
    });

    describe('keyboard behavior', () => {
      let nativeInput: HTMLInputElement;

      const expectNoItemFocused = () => expect(manager.activeItemIndex).toBe(-1);
      const expectLastItemFocused = () => expect(manager.activeItemIndex).toEqual(chips.length - 1);

      beforeEach(() => {
        chipListDebugElement = fixture.debugElement.query(By.directive(SbbChipList))!;
        chipListInstance = chipListDebugElement.componentInstance;
        chips = chipListInstance.chips;
        manager = fixture.componentInstance.chipList._keyManager;
        nativeInput = fixture.nativeElement.querySelector('input');
        nativeInput.focus();
        expectNoItemFocused();
      });

      describe('when the input has focus', () => {
        it('should not focus the last chip when pressing DELETE', () => {
          dispatchKeyboardEvent(nativeInput, 'keydown', DELETE);
          expectNoItemFocused();
        });

        it('should focus the last chip when pressing BACKSPACE when input is empty', () => {
          dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
          expectLastItemFocused();
        });

        it(
          'should not focus the last chip when pressing BACKSPACE after changing input, ' +
            'until BACKSPACE is released and pressed again',
          () => {
            // Change the input
            dispatchKeyboardEvent(nativeInput, 'keydown', A);

            // It shouldn't focus until backspace is released and pressed again
            dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
            dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
            dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
            expectNoItemFocused();

            // Still not focused
            dispatchKeyboardEvent(nativeInput, 'keyup', BACKSPACE);
            expectNoItemFocused();

            // Only now should it focus the last element
            dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
            expectLastItemFocused();
          }
        );

        it('should focus last chip after pressing BACKSPACE after creating a chip', () => {
          // Create a chip
          typeInElement(nativeInput, '123');
          dispatchKeyboardEvent(nativeInput, 'keydown', ENTER);

          expectNoItemFocused();

          dispatchKeyboardEvent(nativeInput, 'keydown', BACKSPACE);
          expectLastItemFocused();
        });
      });
    });
  });

  describe('error messages', () => {
    let errorTestComponent: ChipListWithFormErrorMessages;
    let containerEl: HTMLElement;
    let chipListEl: HTMLElement;

    beforeEach(() => {
      fixture = createComponent(ChipListWithFormErrorMessages);
      fixture.detectChanges();
      errorTestComponent = fixture.componentInstance;
      containerEl = fixture.debugElement.query(By.css('sbb-form-field'))!.nativeElement;
      chipListEl = fixture.debugElement.query(By.css('sbb-chip-list'))!.nativeElement;
    });

    it('should not show any errors if the user has not interacted', () => {
      expect(errorTestComponent.formControl.untouched).toBe(
        true,
        'Expected untouched form control'
      );
      expect(containerEl.querySelectorAll('sbb-error').length).toBe(0, 'Expected no error message');
      expect(chipListEl.getAttribute('aria-invalid')).toBe(
        'false',
        'Expected aria-invalid to be set to "false".'
      );
    });

    it('should display an error message when the list is touched and invalid', fakeAsync(() => {
      expect(errorTestComponent.formControl.invalid).toBe(
        true,
        'Expected form control to be invalid'
      );
      expect(containerEl.querySelectorAll('sbb-error').length).toBe(0, 'Expected no error message');

      errorTestComponent.formControl.markAsTouched();
      fixture.detectChanges();
      tick();

      expect(containerEl.classList).toContain(
        'sbb-form-field-invalid',
        'Expected container to have the invalid CSS class.'
      );
      expect(containerEl.querySelectorAll('sbb-error').length).toBe(
        1,
        'Expected one error message to have been rendered.'
      );
      expect(chipListEl.getAttribute('aria-invalid')).toBe(
        'true',
        'Expected aria-invalid to be set to "true".'
      );
    }));

    it('should display an error message when the parent form is submitted', fakeAsync(() => {
      expect(errorTestComponent.form.submitted).toBe(
        false,
        'Expected form not to have been submitted'
      );
      expect(errorTestComponent.formControl.invalid).toBe(
        true,
        'Expected form control to be invalid'
      );
      expect(containerEl.querySelectorAll('sbb-error').length).toBe(0, 'Expected no error message');

      dispatchFakeEvent(fixture.debugElement.query(By.css('form'))!.nativeElement, 'submit');
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(errorTestComponent.form.submitted).toBe(
          true,
          'Expected form to have been submitted'
        );
        expect(containerEl.classList).toContain(
          'sbb-form-field-invalid',
          'Expected container to have the invalid CSS class.'
        );
        expect(containerEl.querySelectorAll('sbb-error').length).toBe(
          1,
          'Expected one error message to have been rendered.'
        );
        expect(chipListEl.getAttribute('aria-invalid')).toBe(
          'true',
          'Expected aria-invalid to be set to "true".'
        );
      });
    }));

    it('should hide the errors and show the hints once the chip list becomes valid', fakeAsync(() => {
      errorTestComponent.formControl.markAsTouched();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(containerEl.classList).toContain(
          'sbb-form-field-invalid',
          'Expected container to have the invalid CSS class.'
        );
        expect(containerEl.querySelectorAll('sbb-error').length).toBe(
          1,
          'Expected one error message to have been rendered.'
        );

        errorTestComponent.formControl.setValue('something');
        fixture.detectChanges();

        fixture.whenStable().then(() => {
          expect(containerEl.classList).not.toContain(
            'sbb-form-field-invalid',
            'Expected container not to have the invalid class when valid.'
          );
          expect(containerEl.querySelectorAll('sbb-error').length).toBe(
            0,
            'Expected no error messages when the input is valid.'
          );
        });
      });
    }));

    it('should set the proper aria-live attribute on the error messages', () => {
      errorTestComponent.formControl.markAsTouched();
      fixture.detectChanges();
      expect(containerEl.querySelector('sbb-error')!.getAttribute('aria-live')).toBe('polite');
    });

    it('sets the aria-describedby to reference errors when in error state', () => {
      fixture.componentInstance.formControl.markAsTouched();
      fixture.detectChanges();

      const errorIds = fixture.debugElement
        .queryAll(By.css('.sbb-error'))
        .map((el) => el.nativeElement.getAttribute('id'))
        .join(' ');
      const describedBy = chipListEl.getAttribute('aria-describedby');

      expect(errorIds).toBeTruthy('errors should be shown');
      expect(describedBy).toBe(errorIds);
    });
  });

  it('should preselected chip as selected inside an OnPush component', fakeAsync(() => {
    fixture = createComponent(PreselectedChipInsideOnPush);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.sbb-chip').classList).toContain(
      'sbb-chip-selected',
      'Expected first chip to be selected.'
    );
  }));

  function createComponent<T>(
    component: Type<T>,
    providers: Provider[] = [],
    animationsModule:
      | Type<NoopAnimationsModule>
      | Type<BrowserAnimationsModule> = NoopAnimationsModule
  ): ComponentFixture<T> {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SbbChipsModule,
        SbbFormFieldModule,
        SbbInputModule,
        animationsModule,
      ],
      declarations: [component],
      providers: [{ provide: NgZone, useFactory: () => (zone = new MockNgZone()) }, ...providers],
    }).compileComponents();

    return TestBed.createComponent<T>(component);
  }

  function setupStandardList() {
    fixture = createComponent(StandardChipList, []);
    fixture.detectChanges();

    chipListDebugElement = fixture.debugElement.query(By.directive(SbbChipList))!;
    chipListNativeElement = chipListDebugElement.nativeElement;
    chipListInstance = chipListDebugElement.componentInstance;
    testComponent = fixture.debugElement.componentInstance;
    chips = chipListInstance.chips;
  }

  function setupInputList() {
    fixture = createComponent(FormFieldChipList);
    fixture.detectChanges();

    chipListDebugElement = fixture.debugElement.query(By.directive(SbbChipList))!;
    chipListNativeElement = chipListDebugElement.nativeElement;
    chipListInstance = chipListDebugElement.componentInstance;
    testComponent = fixture.debugElement.componentInstance;
    chips = chipListInstance.chips;
  }
});

@Component({
  template: ` <sbb-chip-list [tabIndex]="tabIndex" [selectable]="selectable">
    <sbb-chip *ngFor="let i of chips" (select)="chipSelect(i)" (deselect)="chipDeselect(i)">
      {{ name }} {{ i + 1 }}
    </sbb-chip>
  </sbb-chip-list>`,
})
class StandardChipList {
  name: string = 'Test';
  selectable: boolean = true;
  chipSelect: (index?: number) => void = () => {};
  chipDeselect: (index?: number) => void = () => {};
  tabIndex: number = 0;
  chips = [0, 1, 2, 3, 4];
}

@Component({
  template: `
    <sbb-form-field>
      <sbb-label>Add a chip</sbb-label>
      <sbb-chip-list #chipList>
        <sbb-chip *ngFor="let chip of chips" (removed)="remove(chip)">{{ chip }}</sbb-chip>
      </sbb-chip-list>
      <input name="test" [sbbChipInputFor]="chipList" />
    </sbb-form-field>
  `,
})
class FormFieldChipList {
  chips = ['Chip 0', 'Chip 1', 'Chip 2'];

  remove(chip: string) {
    const index = this.chips.indexOf(chip);

    if (index > -1) {
      this.chips.splice(index, 1);
    }
  }
}

@Component({
  selector: 'basic-chip-list',
  template: `
    <sbb-form-field>
      <sbb-chip-list
        placeholder="Food"
        [formControl]="control"
        [required]="isRequired"
        [tabIndex]="tabIndexOverride"
        [selectable]="selectable"
      >
        <sbb-chip *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
          {{ food.viewValue }}
        </sbb-chip>
      </sbb-chip-list>
    </sbb-form-field>
  `,
})
class BasicChipList {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos', disabled: true },
    { value: 'sandwich-3', viewValue: 'Sandwich' },
    { value: 'chips-4', viewValue: 'Chips' },
    { value: 'eggs-5', viewValue: 'Eggs' },
    { value: 'pasta-6', viewValue: 'Pasta' },
    { value: 'sushi-7', viewValue: 'Sushi' },
  ];
  control = new FormControl();
  isRequired: boolean;
  tabIndexOverride: number;
  selectable: boolean;

  @ViewChild(SbbChipList) chipList: SbbChipList;
  @ViewChildren(SbbChip) chips: QueryList<SbbChip>;
}

@Component({
  selector: 'multi-selection-chip-list',
  template: `
    <sbb-form-field>
      <sbb-chip-list
        [multiple]="true"
        placeholder="Food"
        [formControl]="control"
        [required]="isRequired"
        [tabIndex]="tabIndexOverride"
        [selectable]="selectable"
      >
        <sbb-chip *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
          {{ food.viewValue }}
        </sbb-chip>
      </sbb-chip-list>
    </sbb-form-field>
  `,
})
class MultiSelectionChipList {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos', disabled: true },
    { value: 'sandwich-3', viewValue: 'Sandwich' },
    { value: 'chips-4', viewValue: 'Chips' },
    { value: 'eggs-5', viewValue: 'Eggs' },
    { value: 'pasta-6', viewValue: 'Pasta' },
    { value: 'sushi-7', viewValue: 'Sushi' },
  ];
  control = new FormControl();
  isRequired: boolean;
  tabIndexOverride: number;
  selectable: boolean;

  @ViewChild(SbbChipList) chipList: SbbChipList;
  @ViewChildren(SbbChip) chips: QueryList<SbbChip>;
}

@Component({
  selector: 'input-chip-list',
  template: `
    <sbb-form-field>
      <sbb-chip-list
        [multiple]="true"
        placeholder="Food"
        [formControl]="control"
        [required]="isRequired"
        #chipList1
      >
        <sbb-chip *ngFor="let food of foods" [value]="food.value" (removed)="remove(food)">
          {{ food.viewValue }}
        </sbb-chip>
      </sbb-chip-list>

      <input
        placeholder="New food..."
        [sbbChipInputFor]="chipList1"
        [sbbChipInputSeparatorKeyCodes]="separatorKeyCodes"
        [sbbChipInputAddOnBlur]="addOnBlur"
        (sbbChipInputTokenEnd)="add($event)"
      />
    </sbb-form-field>
  `,
})
class InputChipList {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos', disabled: true },
    { value: 'sandwich-3', viewValue: 'Sandwich' },
    { value: 'chips-4', viewValue: 'Chips' },
    { value: 'eggs-5', viewValue: 'Eggs' },
    { value: 'pasta-6', viewValue: 'Pasta' },
    { value: 'sushi-7', viewValue: 'Sushi' },
  ];
  control = new FormControl();

  separatorKeyCodes = [ENTER, SPACE];
  addOnBlur: boolean = true;
  isRequired: boolean;

  add(event: SbbChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our foods
    if (value) {
      this.foods.push({
        value: `${value.toLowerCase()}-${this.foods.length}`,
        viewValue: value,
      });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(food: any): void {
    const index = this.foods.indexOf(food);

    if (index > -1) {
      this.foods.splice(index, 1);
    }
  }

  @ViewChild(SbbChipList) chipList: SbbChipList;
  @ViewChildren(SbbChip) chips: QueryList<SbbChip>;
}

@Component({
  template: `
    <sbb-form-field>
      <sbb-chip-list [formControl]="control">
        <sbb-chip *ngFor="let food of foods" [value]="food.value">{{ food.viewValue }}</sbb-chip>
      </sbb-chip-list>
    </sbb-form-field>
  `,
})
class FalsyValueChipList {
  foods: any[] = [
    { value: 0, viewValue: 'Steak' },
    { value: 1, viewValue: 'Pizza' },
  ];
  control = new FormControl();
  @ViewChildren(SbbChip) chips: QueryList<SbbChip>;
}

@Component({
  template: `
    <sbb-chip-list>
      <sbb-chip *ngFor="let food of foods" [value]="food.value" [selected]="food.selected">
        {{ food.viewValue }}
      </sbb-chip>
    </sbb-chip-list>
  `,
})
class SelectedChipList {
  foods: any[] = [
    { value: 0, viewValue: 'Steak', selected: true },
    { value: 1, viewValue: 'Pizza', selected: false },
    { value: 2, viewValue: 'Pasta', selected: true },
  ];
  @ViewChildren(SbbChip) chips: QueryList<SbbChip>;
}

@Component({
  template: `
    <form #form="ngForm" novalidate>
      <sbb-form-field>
        <sbb-chip-list [formControl]="formControl">
          <sbb-chip *ngFor="let food of foods" [value]="food.value" [selected]="food.selected">
            {{ food.viewValue }}
          </sbb-chip>
        </sbb-chip-list>
        <sbb-error>Should have value</sbb-error>
      </sbb-form-field>
    </form>
  `,
})
class ChipListWithFormErrorMessages {
  foods: any[] = [
    { value: 0, viewValue: 'Steak', selected: true },
    { value: 1, viewValue: 'Pizza', selected: false },
    { value: 2, viewValue: 'Pasta', selected: true },
  ];
  @ViewChildren(SbbChip) chips: QueryList<SbbChip>;

  @ViewChild('form') form: NgForm;
  formControl = new FormControl('', Validators.required);
}

@Component({
  template: ` <sbb-chip-list>
    <sbb-chip *ngFor="let i of numbers" (removed)="remove(i)">{{ i }}</sbb-chip>
  </sbb-chip-list>`,
  animations: [
    // For the case we're testing this animation doesn't
    // have to be used anywhere, it just has to be defined.
    trigger('dummyAnimation', [
      transition(':leave', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
    ]),
  ],
})
class StandardChipListWithAnimations {
  numbers = [0, 1, 2, 3, 4];

  remove(item: number): void {
    const index = this.numbers.indexOf(item);

    if (index > -1) {
      this.numbers.splice(index, 1);
    }
  }
}

@Component({
  template: `
    <sbb-form-field>
      <sbb-chip-list>
        <sbb-chip [value]="i" (removed)="removeChip($event)" *ngFor="let i of chips">
          Chip {{ i + 1 }}
          <span sbbChipRemove>Remove</span>
        </sbb-chip>
      </sbb-chip-list>
    </sbb-form-field>
  `,
})
class ChipListWithRemove {
  chips = [0, 1, 2, 3, 4];

  removeChip(event: SbbChipEvent) {
    this.chips.splice(event.chip.value, 1);
  }
}

@Component({
  template: `
    <sbb-form-field>
      <sbb-chip-list [formControl]="control">
        <sbb-chip>Pizza</sbb-chip>
        <sbb-chip>Pasta</sbb-chip>
      </sbb-chip-list>
    </sbb-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class PreselectedChipInsideOnPush {
  control = new FormControl('Pizza');
}

@Component({
  template: `
    <form [formGroup]="form">
      <sbb-form-field>
        <sbb-chip-list formControlName="control">
          <sbb-chip>Pizza</sbb-chip>
          <sbb-chip>Pasta</sbb-chip>
        </sbb-chip-list>
      </sbb-form-field>
    </form>
  `,
})
class ChipListInsideDynamicFormGroup {
  @ViewChild(SbbChipList) chipList: SbbChipList;
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.assignGroup(false);
  }

  assignGroup(isDisabled: boolean) {
    this.form = this._formBuilder.group({
      control: { value: [], disabled: isDisabled },
    });
  }
}