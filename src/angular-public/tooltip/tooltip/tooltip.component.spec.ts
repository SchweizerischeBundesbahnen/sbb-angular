import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SBB_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@sbb-esta/angular-core/base/tooltip';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';
import { SbbButtonModule } from '@sbb-esta/angular-public/button';

import { SbbTooltipModule } from '../tooltip.module';

import { SbbTooltipComponent } from './tooltip.component';

@Component({
  selector: 'sbb-tooltip-test',
  template: `
    <sbb-tooltip #t1 (opened)="onOpen($event)" (closed)="onClose($event)">
      <p>Dies ist ein Tooltip mit einer Schaltfläche im Inneren.</p>
      <button mode="secondary" sbbButton (click)="t1.close(true)">Diesen Tooltip schließen</button>
    </sbb-tooltip>
  `,
})
class TooltipTestComponent {
  @ViewChild('t1', { static: true }) t1: SbbTooltipComponent;
  onClose() {}
  onOpen() {}
}

@Component({
  selector: 'sbb-double-tooltip-test',
  template: `
    <sbb-tooltip #t1 (opened)="onOpen($event)" (closed)="onClose($event)">
      <p>Dies ist ein Tooltip mit einer Schaltfläche im Inneren.</p>
      <button mode="secondary" sbbButton (click)="t1.close(true)">Diesen Tooltip schließen</button>
    </sbb-tooltip>
    <sbb-tooltip #t2 (opened)="onOpen($event)" (closed)="onClose($event)">
      <p>Dies ist ein weiterer Tooltip mit einem Link!</p>
      <a href="#" sbbLink>Bezeichnung</a>
    </sbb-tooltip>
  `,
})
class DoubleTooltipTestComponent {
  @ViewChild('t1', { static: true }) t1: SbbTooltipComponent;
  @ViewChild('t2', { static: true }) t2: SbbTooltipComponent;

  onClose() {}
  onOpen() {}
}

describe('SbbTooltip', () => {
  let component: SbbTooltipComponent;
  let fixture: ComponentFixture<SbbTooltipComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbIconModule, SbbIconTestingModule, CommonModule, PortalModule, OverlayModule],
        providers: [SBB_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        declarations: [SbbTooltipComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SbbTooltip using mock component for single tooltip', () => {
  let singleComponentTest: TooltipTestComponent;
  let singleFixtureTest: ComponentFixture<TooltipTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbTooltipModule, SbbButtonModule, SbbIconTestingModule],
        declarations: [TooltipTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    singleFixtureTest = TestBed.createComponent(TooltipTestComponent);
    singleComponentTest = singleFixtureTest.componentInstance;
    singleFixtureTest.detectChanges();
  });

  it('component test is created', async () => {
    expect(singleComponentTest).toBeTruthy();
  });

  it('open tooltip by question mark', () => {
    const buttonQuestionMark = singleComponentTest.t1.tooltipTrigger.nativeElement;
    buttonQuestionMark.click();
    singleFixtureTest.detectChanges();

    expect(buttonQuestionMark.classList.contains('sbb-tooltip-trigger')).toBeTrue();
    expect(buttonQuestionMark.classList.contains('sbb-tooltip-trigger-active')).toBeTrue();

    const tooltipElement = singleFixtureTest.debugElement.query(By.css('.sbb-tooltip'));

    expect(tooltipElement.attributes['aria-expanded']).toBe('true');
    expect(singleComponentTest.t1.overlayAttached).toBe(true);
  });

  it('close tooltip by question mark', () => {
    const buttonQuestionMark = singleComponentTest.t1.tooltipTrigger.nativeElement;
    buttonQuestionMark.click();
    singleFixtureTest.detectChanges();

    // click the second time on question mark to close the tooltip
    buttonQuestionMark.click();
    singleFixtureTest.detectChanges();

    expect(buttonQuestionMark.classList.contains('sbb-tooltip-trigger')).toBeTrue();
    expect(buttonQuestionMark.classList.contains('sbb-tooltip-trigger-active')).toBeFalse();

    const tooltipElement = singleFixtureTest.debugElement.query(By.css('.sbb-tooltip'));

    expect(tooltipElement.attributes['aria-expanded']).toBe('false');
    expect(singleComponentTest.t1.overlayAttached).toBe(false);
  });

  it('close tooltip by internal button', () => {
    const buttonQuestionMark = singleComponentTest.t1.tooltipTrigger.nativeElement;
    buttonQuestionMark.click();
    singleFixtureTest.detectChanges();

    const internalButton = singleFixtureTest.debugElement.query(By.css('.sbb-button-secondary'))
      .nativeElement;
    internalButton.click();
    singleFixtureTest.detectChanges();

    expect(buttonQuestionMark.classList).toContain('sbb-tooltip-trigger');

    const tooltipElement = singleFixtureTest.debugElement.queryAll(By.css('.sbb-tooltip'))[0];

    expect(tooltipElement.attributes['aria-expanded']).toBe('false');
    expect(singleComponentTest.t1.overlayAttached).toBe(false);
  });

  it('close tooltip clicking outside it', () => {
    const buttonQuestionMark = singleComponentTest.t1.tooltipTrigger.nativeElement;
    buttonQuestionMark.click();
    singleFixtureTest.detectChanges();

    singleComponentTest.t1.close();

    expect(buttonQuestionMark.classList.contains('sbb-tooltip-trigger')).toBeTrue();
    expect(buttonQuestionMark.classList.contains('sbb-tooltip-trigger-active')).toBeFalse();

    expect(singleComponentTest.t1.overlayAttached).toBe(false);
  });
});

describe('SbbTooltip using mock component for double tooltip', () => {
  let doubleComponentTest: DoubleTooltipTestComponent;
  let doubleFixtureTest: ComponentFixture<DoubleTooltipTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbTooltipModule, SbbIconTestingModule],
        declarations: [DoubleTooltipTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    doubleFixtureTest = TestBed.createComponent(DoubleTooltipTestComponent);
    doubleComponentTest = doubleFixtureTest.componentInstance;
    doubleFixtureTest.detectChanges();
  });

  it('close a tooltip opened clicking on another tooltip', () => {
    const buttonQuestionMarkT1 = doubleComponentTest.t1.tooltipTrigger.nativeElement;
    buttonQuestionMarkT1.click();
    doubleFixtureTest.detectChanges();

    expect(doubleComponentTest.t1.overlayAttached).toBe(true);
    expect(doubleComponentTest.t2.tooltipRef).toBeUndefined();

    const buttonQuestionMarkT2 = doubleComponentTest.t2.tooltipTrigger.nativeElement;

    buttonQuestionMarkT2.click();
    doubleFixtureTest.detectChanges();

    expect(doubleComponentTest.t1.overlayAttached).toBeFalsy();
    expect(doubleComponentTest.t2.overlayAttached).toBe(true);
  });
});
