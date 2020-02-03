import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconCrossComponent, IconCrossModule } from '@sbb-esta/angular-icons';
import { configureTestSuite } from 'ng-bullet';

import { ContextmenuComponent } from '../../../contextmenu';

import { ChipComponent } from './chip.component';

@Component({
  selector: 'sbb-test-chip-input',
  template: `
    <sbb-chip [disabled]="disabled" [label]="label" (dismissed)="dismissed($event)"></sbb-chip>
  `
})
class ChipTestComponent {
  disabled = false;
  label = 'Label';

  dismissed(event) {}
}

describe('ContextmenuComponent', () => {
  let component: ChipTestComponent;
  let fixture: ComponentFixture<ChipTestComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ChipComponent, ChipTestComponent],
      imports: [CommonModule, IconCrossModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a dismissable chip with default label', () => {
    const chips = fixture.debugElement.queryAll(By.directive(ChipComponent));
    const crossIcon = fixture.debugElement.query(By.directive(IconCrossComponent));
    const label = fixture.debugElement.query(By.css('.sbb-chip-label'));
    expect(chips.length).toBe(1);
    expect(crossIcon).toBeDefined();
    expect(label.nativeElement.innerHTML).toBe(component.label);
    expect(chips[0].classes['sbb-chip-disabled']).toBe(false);
    expect(chips[0].classes['sbb-chip-active']).toBe(true);
  });

  it('should show a disabled chip', () => {
    component.disabled = true;
    fixture.detectChanges();

    const chips = fixture.debugElement.queryAll(By.directive(ChipComponent));
    const crossIcon = fixture.debugElement.query(By.directive(IconCrossComponent));
    expect(crossIcon).toBeNull();
    expect(chips[0].classes['sbb-chip-disabled']).toBe(true);
    expect(chips[0].classes['sbb-chip-active']).toBe(false);
  });

  it('should emit dismissed event when dismissed button is pressed', () => {
    const dismissedSpy = spyOn(component, 'dismissed');
    const dismissButton = fixture.debugElement.query(By.css('.sbb-chip-close-btn'));
    dismissButton.nativeElement.click();

    expect(dismissedSpy).toHaveBeenCalledTimes(1);
    expect(dismissedSpy).toHaveBeenCalledWith(false);
  });

  it('should hide chip when dismissed button is pressed', () => {
    const dismissButton = fixture.debugElement.query(By.css('.sbb-chip-close-btn'));
    dismissButton.nativeElement.click();
    fixture.detectChanges();

    const chips = fixture.debugElement.queryAll(By.directive(ChipComponent));
    chips.forEach(chip => expect(chip.attributes['aria-hidden']).toBe('true'));
    chips.forEach(chip => expect(chip.properties['hidden']).toBe(true));
  });
});
