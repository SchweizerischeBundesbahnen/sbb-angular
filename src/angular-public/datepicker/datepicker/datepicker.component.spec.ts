import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '@angular/cdk/keycodes';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, FactoryProvider, Type, ValueProvider, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, inject, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';
import { JAN } from '@sbb-esta/angular-core/testing';
import {
  dispatchFakeEvent,
  dispatchKeyboardEvent,
  dispatchMouseEvent,
} from '@sbb-esta/angular-core/testing';

import { SbbDateInput } from '../date-input/date-input.directive';
import { SbbDatepickerModule } from '../datepicker.module';

import { SbbDatepicker } from './datepicker.component';

@Component({
  template: `
    <sbb-datepicker #d [disabled]="disabled" [opened]="opened">
      <input sbbDateInput [value]="date" />
    </sbb-datepicker>
  `,
})
class StandardDatepickerComponent {
  opened = false;
  touch = false;
  disabled = false;
  date: Date | null = new Date(2020, JAN, 1);
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
  @ViewChild(SbbDateInput, { static: true }) datepickerInput: SbbDateInput<Date>;
}

@Component({
  template: `
    <sbb-datepicker>
      <input sbbDateInput />
      <input sbbDateInput />
    </sbb-datepicker>
  `,
})
class MultiInputDatepickerComponent {}

@Component({
  template: ` <sbb-datepicker #d></sbb-datepicker> `,
})
class NoInputDatepickerComponent {
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
}

@Component({
  template: `
    <sbb-datepicker #d [startAt]="startDate">
      <input sbbDateInput [value]="date" />
    </sbb-datepicker>
  `,
})
class DatepickerWithStartAtComponent {
  date = new Date(2020, JAN, 1);
  startDate = new Date(2010, JAN, 1);
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
}

@Component({
  template: `
    <sbb-datepicker #d>
      <input [(ngModel)]="selected" sbbDateInput />
    </sbb-datepicker>
  `,
})
class DatepickerWithNgModelComponent {
  selected: Date | null = null;
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
  @ViewChild(SbbDateInput, { static: true }) datepickerInput: SbbDateInput<Date>;
}

@Component({
  template: `
    <sbb-datepicker #d>
      <input [formControl]="formControl" sbbDateInput />
    </sbb-datepicker>
  `,
})
class DatepickerWithFormControlComponent {
  formControl = new FormControl();
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
  @ViewChild(SbbDateInput, { static: true }) datepickerInput: SbbDateInput<Date>;
}

@Component({
  template: `
    <sbb-datepicker #d>
      <input sbbDateInput />
    </sbb-datepicker>
  `,
})
class DatepickerWithToggleComponent {
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
  @ViewChild(SbbDateInput, { static: true }) input: SbbDateInput<Date>;
}

@Component({
  template: `
    <sbb-datepicker #d>
      <input sbbDateInput [(ngModel)]="date" [min]="minDate" [max]="maxDate" />
    </sbb-datepicker>
  `,
})
class DatepickerWithMinAndMaxValidationComponent {
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
  date: Date | null;
  minDate = new Date(2010, JAN, 1);
  maxDate = new Date(2020, JAN, 1);
}

@Component({
  template: `
    <sbb-datepicker (opened)="openedSpy()" (closed)="closedSpy()" #d>
      <input [(ngModel)]="selected" sbbDateInput />
    </sbb-datepicker>
  `,
})
class DatepickerWithEventsComponent {
  selected: Date | null = null;
  openedSpy = jasmine.createSpy('opened spy');
  closedSpy = jasmine.createSpy('closed spy');
  @ViewChild('d', { static: true }) datepicker: SbbDatepicker<Date>;
}

@Component({
  template: `
    <sbb-datepicker #d>
      <input (focus)="d.open()" sbbDateInput />
    </sbb-datepicker>
  `,
})
class DatepickerOpeningOnFocusComponent {
  @ViewChild(SbbDatepicker, { static: true }) datepicker: SbbDatepicker<Date>;
}

describe('SbbDatepicker', () => {
  // Creates a test component fixture.
  function createComponent(
    component: Type<any>,
    imports: Type<any>[] = [],
    providers: (FactoryProvider | ValueProvider)[] = [],
    entryComponents: Type<any>[] = []
  ): ComponentFixture<any> {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        SbbDatepickerModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        SbbIconModule,
        SbbIconTestingModule,
        ...imports,
      ],
      providers,
      declarations: [component, ...entryComponents],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [entryComponents],
      },
    }).compileComponents();

    return TestBed.createComponent(component);
  }

  afterEach(inject([OverlayContainer], (container: OverlayContainer) => {
    container.ngOnDestroy();
  }));

  describe('with NativeDateModule', () => {
    describe('standard datepicker', () => {
      let fixture: ComponentFixture<StandardDatepickerComponent>;
      let testComponent: StandardDatepickerComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(StandardDatepickerComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
        flush();
      }));

      it('open non-touch should open popup', () => {
        expect(document.querySelector('.cdk-overlay-pane.sbb-datepicker-popup')).toBeNull();

        testComponent.datepicker.open();
        fixture.detectChanges();

        expect(document.querySelector('.cdk-overlay-pane.sbb-datepicker-popup')).not.toBeNull();
      });

      it('should open datepicker if opened input is set to true', fakeAsync(() => {
        testComponent.opened = true;
        fixture.detectChanges();
        flush();

        expect(document.querySelector('.sbb-datepicker-content')).not.toBeNull();

        testComponent.opened = false;
        fixture.detectChanges();
        flush();

        expect(document.querySelector('.sbb-datepicker-content')).toBeNull();
      }));

      it('disabled datepicker input should open the calendar if datepicker is enabled', () => {
        testComponent.datepicker.disabled = false;
        testComponent.datepickerInput.disabled = true;
        fixture.detectChanges();

        expect(document.querySelector('.cdk-overlay-pane')).toBeNull();

        testComponent.datepicker.open();
        fixture.detectChanges();

        expect(document.querySelector('.cdk-overlay-pane')).not.toBeNull();
      });

      it('close should close popup', fakeAsync(() => {
        testComponent.datepicker.open();
        fixture.detectChanges();
        flush();

        // tslint:disable-next-line:no-non-null-assertion
        const popup = document.querySelector('.cdk-overlay-pane')!;
        expect(popup).not.toBeNull();
        // tslint:disable-next-line:radix
        expect(parseInt(getComputedStyle(popup).height as string)).not.toBe(0);

        testComponent.datepicker.close();
        fixture.detectChanges();
        flush();

        // tslint:disable-next-line:radix
        expect(parseInt(getComputedStyle(popup).height as string)).toBeNaN();
      }));

      it('should close the popup when pressing ESCAPE', fakeAsync(() => {
        testComponent.datepicker.open();
        fixture.detectChanges();

        expect(testComponent.datepicker.opened).toBe(true, 'Expected datepicker to be open.');

        dispatchKeyboardEvent(document.body, 'keydown', ESCAPE);
        fixture.detectChanges();
        flush();

        expect(testComponent.datepicker.opened).toBe(false, 'Expected datepicker to be closed.');
      }));

      it('should set the proper role on the popup', fakeAsync(() => {
        testComponent.datepicker.open();
        fixture.detectChanges();
        flush();

        // tslint:disable-next-line:no-non-null-assertion
        const popup = document.querySelector('.cdk-overlay-pane')!;
        expect(popup).toBeTruthy();
        expect(popup.getAttribute('role')).toBe('dialog');
      }));

      it(
        'clicking the currently selected date should close the calendar ' +
          'without firing selectedChanged',
        fakeAsync(() => {
          const selectedChangedSpy = spyOn(
            testComponent.datepicker.selectedChanged,
            'next'
          ).and.callThrough();

          for (let changeCount = 1; changeCount < 3; changeCount++) {
            const currentDay = changeCount;
            testComponent.datepicker.open();
            fixture.detectChanges();

            expect(document.querySelector('sbb-datepicker-content')).not.toBeNull();
            expect(testComponent.datepickerInput.value).toEqual(new Date(2020, JAN, currentDay));

            const cells = document.querySelectorAll('.sbb-calendar-body-cell');
            dispatchMouseEvent(cells[1], 'click');
            fixture.detectChanges();
            flush();
          }

          expect(selectedChangedSpy.calls.count()).toEqual(1);
          expect(document.querySelector('sbb-dialog-container')).toBeNull();
          expect(testComponent.datepickerInput.value).toEqual(new Date(2020, JAN, 2));
        })
      );

      it(
        'pressing enter on the currently selected date should close the calendar without ' +
          'firing selectedChanged',
        fakeAsync(() => {
          const selectedChangedSpy = spyOn(
            testComponent.datepicker.selectedChanged,
            'next'
          ).and.callThrough();

          for (let changeCount = 1; changeCount <= 3; changeCount++) {
            testComponent.datepicker.open();
            fixture.detectChanges();

            const calendarBodyEl = document.querySelector('.sbb-calendar-body') as HTMLElement;
            expect(calendarBodyEl).not.toBeNull();
            expect(testComponent.datepickerInput.value).toEqual(new Date(2020, JAN, 1));

            dispatchKeyboardEvent(calendarBodyEl, 'keydown', ENTER);
            fixture.detectChanges();
            flush();
          }

          expect(selectedChangedSpy.calls.count()).toEqual(1);
          expect(document.querySelector('sbb-dialog-container')).toBeNull();
          expect(testComponent.datepickerInput.value).toEqual(new Date(2020, JAN, 1));
        })
      );

      it('startAt should fallback to input value', () => {
        expect(testComponent.datepicker.startAt).toEqual(new Date(2020, JAN, 1));
      });

      it('should attach popup to native input', () => {
        const attachToRef = testComponent.datepickerInput.getConnectedOverlayOrigin();
        expect(attachToRef.nativeElement.tagName.toLowerCase()).toBe(
          'input',
          'popup should be attached to native input'
        );
      });

      it('input should aria-owns calendar after opened in non-touch mode', fakeAsync(() => {
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
        expect(inputEl.getAttribute('aria-owns')).toBeNull();

        testComponent.datepicker.open();
        fixture.detectChanges();
        flush();

        const ownedElementId = inputEl.getAttribute('aria-owns');
        expect(ownedElementId).not.toBeNull();

        const ownedElement = document.getElementById(ownedElementId);
        expect(ownedElement).not.toBeNull();
        expect((ownedElement as Element).tagName.toLowerCase()).toBe('sbb-calendar');
      }));

      it('should not throw when given wrong data type', () => {
        testComponent.date = '1/1/2017' as any;

        expect(() => fixture.detectChanges()).not.toThrow();
      });

      it('should clear out the backdrop subscriptions on close', fakeAsync(() => {
        for (let i = 0; i < 3; i++) {
          testComponent.datepicker.open();
          fixture.detectChanges();

          testComponent.datepicker.close();
          fixture.detectChanges();
        }

        testComponent.datepicker.open();
        fixture.detectChanges();

        const spy = jasmine.createSpy('close event spy');
        const subscription = testComponent.datepicker.closedStream.subscribe(spy);
        // tslint:disable-next-line:no-non-null-assertion
        const backdrop = document.querySelector('.cdk-overlay-backdrop')! as HTMLElement;

        backdrop.click();
        fixture.detectChanges();
        flush();

        expect(spy).toHaveBeenCalledTimes(1);
        expect(testComponent.datepicker.opened).toBe(false);
        subscription.unsubscribe();
      }));

      it('should close the datepicker using ALT + UP_ARROW', fakeAsync(() => {
        testComponent.datepicker.open();
        fixture.detectChanges();
        flush();

        expect(testComponent.datepicker.opened).toBe(true);

        dispatchKeyboardEvent(document.body, 'keydown', UP_ARROW, undefined, { alt: true });

        fixture.detectChanges();
        flush();

        expect(testComponent.datepicker.opened).toBe(false);
      }));

      it('should open the datpeicker using ALT + DOWN_ARROW', fakeAsync(() => {
        expect(testComponent.datepicker.opened).toBe(false);

        const event = dispatchKeyboardEvent(
          fixture.nativeElement.querySelector('input'),
          'keydown',
          DOWN_ARROW,
          undefined,
          { alt: true }
        );

        fixture.detectChanges();
        flush();

        expect(testComponent.datepicker.opened).toBe(true);
        expect(event.defaultPrevented).toBe(true);
      }));
    });

    describe('datepicker with too many inputs', () => {
      it('should throw when multiple inputs registered', fakeAsync(() => {
        const fixture = createComponent(MultiInputDatepickerComponent);
        expect(() => fixture.detectChanges()).toThrow();
      }));
    });

    describe('datepicker with no inputs', () => {
      let fixture: ComponentFixture<NoInputDatepickerComponent>;
      let testComponent: NoInputDatepickerComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(NoInputDatepickerComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
      }));

      it('should not throw when accessing disabled property', () => {
        expect(() => testComponent.datepicker.disabled).not.toThrow();
      });

      it('should throw when opened with no registered inputs', fakeAsync(() => {
        expect(() => testComponent.datepicker.open()).toThrow();
      }));
    });

    describe('datepicker with startAt', () => {
      let fixture: ComponentFixture<DatepickerWithStartAtComponent>;
      let testComponent: DatepickerWithStartAtComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithStartAtComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
      }));

      it('explicit startAt should override input value', () => {
        expect(testComponent.datepicker.startAt).toEqual(new Date(2010, JAN, 1));
      });
    });

    describe('datepicker with ngModel', () => {
      let fixture: ComponentFixture<DatepickerWithNgModelComponent>;
      let testComponent: DatepickerWithNgModelComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithNgModelComponent);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
          fixture.detectChanges();

          testComponent = fixture.componentInstance;
        });
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
      }));

      it('should mark input dirty after input event', () => {
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(inputEl.classList).toContain('ng-pristine');

        inputEl.value = '01.01.2001';
        dispatchFakeEvent(inputEl, 'input');
        fixture.detectChanges();

        expect(inputEl.classList).toContain('ng-dirty');
      });

      it('should not mark dirty after model change', fakeAsync(() => {
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(inputEl.classList).toContain('ng-pristine');

        testComponent.selected = new Date(2017, JAN, 1);
        fixture.detectChanges();
        flush();
        fixture.detectChanges();

        expect(inputEl.classList).toContain('ng-pristine');
      }));

      it('should mark input touched on blur', () => {
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(inputEl.classList).toContain('ng-untouched');

        dispatchFakeEvent(inputEl, 'focus');
        fixture.detectChanges();

        expect(inputEl.classList).toContain('ng-untouched');

        dispatchFakeEvent(inputEl, 'blur');
        fixture.detectChanges();

        expect(inputEl.classList).toContain('ng-touched');
      });

      it('should not reformat invalid dates on blur', () => {
        const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;

        inputEl.value = 'very-valid-date';
        dispatchFakeEvent(inputEl, 'input');
        fixture.detectChanges();

        dispatchFakeEvent(inputEl, 'blur');
        fixture.detectChanges();

        expect(inputEl.value).toBe('very-valid-date');
      });
    });

    describe('datepicker with formControl', () => {
      let fixture: ComponentFixture<DatepickerWithFormControlComponent>;
      let testComponent: DatepickerWithFormControlComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithFormControlComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
      }));
    });

    describe('datepicker with sbb-datepicker-toggle', () => {
      let fixture: ComponentFixture<DatepickerWithToggleComponent>;
      let testComponent: DatepickerWithToggleComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithToggleComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
        flush();
      }));

      it('should not open calendar when toggle clicked if datepicker is disabled', () => {
        testComponent.datepicker.disabled = true;
        fixture.detectChanges();
        const toggle = fixture.debugElement.query(By.css('button')).nativeElement;

        expect(toggle.hasAttribute('disabled')).toBe(true);
        expect(document.querySelector('sbb-dialog-container')).toBeNull();

        dispatchMouseEvent(toggle, 'click');
        fixture.detectChanges();

        expect(document.querySelector('sbb-dialog-container')).toBeNull();
      });

      it('should not open calendar when toggle clicked if input is disabled', () => {
        expect(testComponent.datepicker.disabled).toBe(false);

        testComponent.input.disabled = true;
        fixture.detectChanges();
        const toggle = fixture.debugElement.query(By.css('button')).nativeElement;

        expect(toggle.hasAttribute('disabled')).toBe(true);
        expect(document.querySelector('sbb-dialog-container')).toBeNull();

        dispatchMouseEvent(toggle, 'click');
        fixture.detectChanges();

        expect(document.querySelector('sbb-dialog-container')).toBeNull();
      });

      it('should set the `button` type on the trigger to prevent form submissions', () => {
        const toggle = fixture.debugElement.query(By.css('button')).nativeElement;
        expect(toggle.getAttribute('type')).toBe('button');
      });

      it('should restore focus to the toggle after the calendar is closed', () => {
        const toggle = fixture.debugElement.query(By.css('button')).nativeElement;

        fixture.detectChanges();

        toggle.focus();
        expect(document.activeElement).toBe(toggle, 'Expected toggle to be focused.');

        fixture.componentInstance.datepicker.open();
        fixture.detectChanges();

        // tslint:disable-next-line:no-non-null-assertion
        const pane = document.querySelector('.cdk-overlay-pane')!;

        expect(pane).toBeTruthy('Expected calendar to be open.');
        expect(pane.contains(document.activeElement)).toBe(
          true,
          'Expected focus to be inside the calendar.'
        );

        fixture.componentInstance.datepicker.close();
        fixture.detectChanges();

        expect(document.activeElement).toBe(toggle, 'Expected focus to be restored to toggle.');
      });

      it('should toggle the active state of the datepicker toggle', fakeAsync(() => {
        const toggle = fixture.debugElement.query(By.css('sbb-datepicker-toggle')).nativeElement;

        expect(toggle.classList).not.toContain('sbb-datepicker-toggle-active');

        fixture.componentInstance.datepicker.open();
        fixture.detectChanges();
        flush();

        expect(toggle.classList).toContain('sbb-datepicker-toggle-active');

        fixture.componentInstance.datepicker.close();
        fixture.detectChanges();
        flush();
        fixture.detectChanges();

        expect(toggle.classList).not.toContain('sbb-datepicker-toggle-active');
      }));
    });

    describe('datepicker with min and max dates and validation', () => {
      let fixture: ComponentFixture<DatepickerWithMinAndMaxValidationComponent>;
      let testComponent: DatepickerWithMinAndMaxValidationComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithMinAndMaxValidationComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
      }));

      afterEach(fakeAsync(() => {
        testComponent.datepicker.close();
        fixture.detectChanges();
      }));

      it('should use min and max dates specified by the input', () => {
        expect(testComponent.datepicker.minDate).toEqual(new Date(2010, JAN, 1));
        expect(testComponent.datepicker.maxDate).toEqual(new Date(2020, JAN, 1));
      });
    });

    describe('with events', () => {
      let fixture: ComponentFixture<DatepickerWithEventsComponent>;
      let testComponent: DatepickerWithEventsComponent;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerWithEventsComponent);
        fixture.detectChanges();
        testComponent = fixture.componentInstance;
      }));

      it('should dispatch an event when a datepicker is opened', () => {
        testComponent.datepicker.open();
        fixture.detectChanges();

        expect(testComponent.openedSpy).toHaveBeenCalled();
      });

      it('should dispatch an event when a datepicker is closed', fakeAsync(() => {
        testComponent.datepicker.open();
        fixture.detectChanges();

        testComponent.datepicker.close();
        flush();
        fixture.detectChanges();

        expect(testComponent.closedSpy).toHaveBeenCalled();
      }));
    });

    describe('datepicker that opens on focus', () => {
      let fixture: ComponentFixture<DatepickerOpeningOnFocusComponent>;
      let testComponent: DatepickerOpeningOnFocusComponent;
      let input: HTMLInputElement;

      beforeEach(fakeAsync(() => {
        fixture = createComponent(DatepickerOpeningOnFocusComponent);
        fixture.detectChanges();
        testComponent = fixture.componentInstance;
        input = fixture.debugElement.query(By.css('input')).nativeElement;
      }));

      it('should not reopen if the browser fires the focus event asynchronously', fakeAsync(() => {
        // Stub out the real focus method so we can call it reliably.
        spyOn(input, 'focus').and.callFake(() => {
          // Dispatch the event handler async to simulate the IE11 behavior.
          Promise.resolve().then(() => dispatchFakeEvent(input, 'focus'));
        });

        // Open initially by focusing.
        input.focus();
        fixture.detectChanges();
        flush();

        // Due to some browser limitations we can't install a stub on `document.activeElement`
        // so instead we have to override the previously-focused element manually.
        (fixture.componentInstance.datepicker as any)._focusedElementBeforeOpen = input;

        // Ensure that the datepicker is actually open.
        expect(testComponent.datepicker.opened).toBe(true, 'Expected datepicker to be open.');

        // Close the datepicker.
        testComponent.datepicker.close();
        fixture.detectChanges();

        // Schedule the input to be focused asynchronously.
        input.focus();
        fixture.detectChanges();

        // Flush out the scheduled tasks.
        flush();

        expect(testComponent.datepicker.opened).toBe(false, 'Expected datepicker to be closed.');
      }));
    });
  });
});
