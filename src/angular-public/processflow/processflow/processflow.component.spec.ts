import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';
import { dispatchMouseEvent } from '@sbb-esta/angular-core/testing';

import { SbbProcessflowModule } from '../processflow.module';

import { SbbProcessflow } from './processflow.component';

@Component({
  selector: 'sbb-processflow-test',
  template: `
    <sbb-processflow #processflow>
      <sbb-processflow-step title="Step 1">
        <div>Step content 1</div>
      </sbb-processflow-step>
      <sbb-processflow-step title="Step 2">
        <div>Step content 2</div>
      </sbb-processflow-step>
      <sbb-processflow-step title="Step 3">
        <div>Step content 3</div>
      </sbb-processflow-step>
    </sbb-processflow>
  `,
})
export class ProcessflowTestComponent {
  @ViewChild('processflow', { static: true }) processflow: SbbProcessflow;
}

describe('SbbProcessflow', () => {
  let component: SbbProcessflow;
  let fixture: ComponentFixture<SbbProcessflow>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbIconModule, SbbIconTestingModule],
        declarations: [SbbProcessflow],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbProcessflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SbbProcessflow user interaction', () => {
  let component: ProcessflowTestComponent;
  let fixture: ComponentFixture<ProcessflowTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbProcessflowModule, SbbIconTestingModule],
        declarations: [ProcessflowTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessflowTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to the next step', async () => {
    await fixture.whenStable();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    component.processflow.nextStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 2');
  });

  it('should go to the previous step', async () => {
    await fixture.whenStable();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    component.processflow.nextStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 2');
    component.processflow.prevStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
  });

  it('should disable the next step when going backwards', async () => {
    await fixture.whenStable();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    component.processflow.nextStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 2');
    component.processflow.prevStep();
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    expect(component.processflow.steps.toArray()[1].disabled).toBeTruthy();
  });

  it('should not be possible to click on next steps', async () => {
    await fixture.whenStable();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    dispatchMouseEvent(steps[1], 'click');
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
  });

  it('should be possible to click on previous steps', () => {
    component.processflow.nextStep();
    component.processflow.nextStep();
    fixture.detectChanges();
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    dispatchMouseEvent(steps[0], 'click');
    fixture.detectChanges();
    expect(component.processflow.getActiveStep()!.title).toBe('Step 1');
  });

  it('should disable next steps when clicking on previous steps', () => {
    component.processflow.nextStep();
    component.processflow.nextStep();
    fixture.detectChanges();
    const steps = document.querySelectorAll('.sbb-processflow-step button');
    dispatchMouseEvent(steps[0], 'click');
    fixture.detectChanges();
    expect(
      steps[1].classList.contains('sbb-disabled') && steps[2].classList.contains('sbb-disabled')
    ).toBeTruthy();
  });
});
