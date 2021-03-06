import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ɵRadioButtonModule } from '@sbb-esta/angular-core/radio-button';

import { SbbRadioButton } from './radio-button.component';

@Component({
  selector: 'sbb-model-radio-button-test',
  template: `
    <sbb-radio-group name="test-radio" [(ngModel)]="testValue">
      <sbb-radio-button value="1"> Test radio button 1 </sbb-radio-button>
      <sbb-radio-button value="2"> Test radio button 2 </sbb-radio-button>
    </sbb-radio-group>
  `,
})
class ModelRadioButtonTestComponent {
  testValue = '2';
}

describe('SbbRadioButton', () => {
  let component: SbbRadioButton;
  let fixture: ComponentFixture<SbbRadioButton>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule],
        declarations: [SbbRadioButton],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbRadioButton);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a generated id if not provided', () => {
    expect(component.inputId).toMatch(/sbb-radio-button-\d+-input/);
  });
});

describe('SbbRadioButton using mock component', () => {
  let modelComponent: ModelRadioButtonTestComponent;
  let modelComponentFixture: ComponentFixture<ModelRadioButtonTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, FormsModule, ɵRadioButtonModule],
        declarations: [SbbRadioButton, ModelRadioButtonTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    modelComponentFixture = TestBed.createComponent(ModelRadioButtonTestComponent);
    modelComponent = modelComponentFixture.componentInstance;

    modelComponentFixture.detectChanges();
  });

  it('should create', () => {
    expect(modelComponent).toBeTruthy();
  });

  it('should create mock component and should contain two sbb-radio-button components', () => {
    expect(modelComponent).toBeTruthy();

    const radiobuttonComponents = modelComponentFixture.debugElement.queryAll(
      By.directive(SbbRadioButton)
    );
    expect(radiobuttonComponents).toBeTruthy();
    expect(radiobuttonComponents.length).toBe(2);
  });

  it('should check the radio button when click the label', () => {
    const radiobuttonLabel = modelComponentFixture.debugElement.query(By.css('label'));
    expect(radiobuttonLabel).toBeTruthy();

    radiobuttonLabel.nativeElement.click();

    const radioButtonComponent = modelComponentFixture.debugElement.query(
      By.directive(SbbRadioButton)
    );
    expect(radioButtonComponent).toBeTruthy();

    const radioButtonChecked = radioButtonComponent.queryAll(By.css('input:checked'));
    expect(radioButtonChecked).toBeTruthy();
    expect(radioButtonChecked.length).toBe(1);
  });

  it('should be mutual exclusive', () => {
    const radioButtons = modelComponentFixture.debugElement.queryAll(By.directive(SbbRadioButton));
    radioButtons[0].query(By.css('input[type="radio"]')).nativeElement.click();

    let radioButtonChecked = modelComponentFixture.debugElement.queryAll(By.css('input:checked'));
    expect(radioButtonChecked.length).toBe(1);

    radioButtons[1].query(By.css('input[type="radio"]')).nativeElement.click();

    radioButtonChecked = modelComponentFixture.debugElement.queryAll(By.css('input:checked'));
    expect(radioButtonChecked.length).toBe(1);
  });

  it('should checked if model is equal to value', async () => {
    const [radiobuttonLabel, radiobuttonLabel2] = modelComponentFixture.debugElement.queryAll(
      By.css('label')
    );
    expect(radiobuttonLabel).toBeTruthy();
    expect(radiobuttonLabel2).toBeTruthy();

    modelComponent.testValue = '1';
    modelComponentFixture.detectChanges();

    await modelComponentFixture.whenStable();

    const [firstComponent, secondComponent] = modelComponentFixture.debugElement.queryAll(
      By.directive(SbbRadioButton)
    );
    expect(firstComponent.componentInstance._checked).toBe(true);

    radiobuttonLabel2.nativeElement.click();
    modelComponentFixture.detectChanges();

    await modelComponentFixture.whenStable();
    expect(secondComponent.componentInstance._checked).toBe(true);
    expect(modelComponent.testValue).toBe(secondComponent.componentInstance.value);
  });
});
