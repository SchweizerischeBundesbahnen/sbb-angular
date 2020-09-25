import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';

import { SbbLinksModule } from '../links.module';

@Component({
  selector: 'sbb-test-link',
  template: ` <a sbbLink [mode]="mode" [icon]="icon">test</a> `,
})
class TestLinkComponent {
  mode: 'normal' | 'stretch' | 'form' = 'normal';
  icon: 'arrow' | 'download' = 'arrow';
}

describe('LinkComponent', () => {
  let component: TestLinkComponent;
  let fixture: ComponentFixture<TestLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestLinkComponent],
      imports: [SbbLinksModule, SbbIconTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two sbb-icon arrow-right icons', () => {
    component.icon = 'arrow';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(
      By.css('sbb-icon[svgIcon="kom:arrow-right-small"]')
    );
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(2);
  });

  it('should have two sbb-icon download icons', () => {
    component.icon = 'download';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon[svgIcon="kom:download-small"]'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(2);
  });

  it('should have a sbb-icon download icon in stretch mode', () => {
    component.icon = 'download';
    component.mode = 'stretch';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon[svgIcon="kom:download-small"]'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon arrow-right icon in stretch mode', () => {
    component.mode = 'stretch';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(
      By.css('sbb-icon[svgIcon="kom:arrow-right-small"]')
    );
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have grey text and icon in form mode', () => {
    component.mode = 'form';
    fixture.detectChanges();

    const elementStyle = getComputedStyle(fixture.debugElement.query(By.css('a')).nativeElement);

    // #666666 == rgb(102,102,102)
    expect(elementStyle.getPropertyValue('color')).toBe('rgb(102, 102, 102)');

    const icon = fixture.debugElement.query(By.css('sbb-icon[svgIcon="kom:arrow-right-small"]'));
    expect(icon).toBeTruthy();

    const iconStyle = getComputedStyle(icon.nativeElement);

    // #666666 == rgb(102, 102, 102)
    expect(iconStyle.getPropertyValue('color')).toBe('rgb(102, 102, 102)');
  });
});
