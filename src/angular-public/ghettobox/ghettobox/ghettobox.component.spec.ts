import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbIconDirectiveModule } from '@sbb-esta/angular-core/icon-directive';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';

import { SbbGhettobox } from './ghettobox.component';

// tslint:disable:i18n
@Component({
  selector: 'sbb-ghettobox-test',
  template: `
    <sbb-ghettobox id="simple-ghettobox" (afterDelete)="afterDelete()">TEST</sbb-ghettobox>

    <sbb-ghettobox
      id="link-icon-ghettobox"
      [routerLink]="['.', 'test']"
      [queryParams]="{ debug: false }"
      fragment="test"
    >
      <sbb-icon svgIcon="fpl:disruption" *sbbIcon class="sbb-icon-fit"></sbb-icon>
      This is a simple link text with custom icon
    </sbb-ghettobox>
  `,
  entryComponents: [SbbGhettobox],
})
export class GhettoboxTestComponent {
  afterDelete() {}
}

describe('SbbGhettobox', () => {
  let component: GhettoboxTestComponent;
  let fixture: ComponentFixture<GhettoboxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        SbbIconTestingModule,
        SbbIconModule,
        SbbIconDirectiveModule,
      ],
      declarations: [GhettoboxTestComponent, SbbGhettobox],
    }).compileComponents();
  }));

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    fixture = TestBed.createComponent(GhettoboxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Simple Ghettobox', () => {
    let ghettoboxDebugElement: DebugElement;

    beforeEach(() => {
      ghettoboxDebugElement = fixture.debugElement.query(By.css('[id="simple-ghettobox"]'));
    });

    it('should bind proper accessibility attributes', () => {
      expect(ghettoboxDebugElement.nativeElement.getAttribute('role')).toEqual('alert');
      expect(ghettoboxDebugElement.nativeElement.getAttribute('tabindex')).toEqual('-1');
    });

    it('should have the info default icon', () => {
      const ghettoboxIcon = ghettoboxDebugElement.query(By.css('sbb-icon[svgIcon="fpl:info"]'));

      expect(ghettoboxIcon).toBeTruthy();
    });

    it('should have "TEST" as message', () => {
      const ghettoboxMessage = ghettoboxDebugElement.query(By.css('.sbb-ghettobox-content'))
        .nativeElement.innerText;

      expect(ghettoboxMessage).toBe('TEST');
    });

    it('should delete the ghettobox on close button click', async () => {
      const closeButton = ghettoboxDebugElement.query(By.css('.sbb-ghettobox-close-button'));

      spyOn(component, 'afterDelete');

      closeButton.nativeElement.click();

      fixture.detectChanges();
      await fixture.whenStable();

      expect(ghettoboxDebugElement.componentInstance.visible).toBe(false);
      expect(component.afterDelete).toHaveBeenCalled();
    });
  });

  describe('Link Ghettobox with custom icon', () => {
    let ghettoboxDebugElement: DebugElement;

    beforeEach(() => {
      ghettoboxDebugElement = fixture.debugElement.query(By.css('[id="link-icon-ghettobox"]'));
    });

    it('should have a custom icon', async () => {
      const ghettoboxIcon = ghettoboxDebugElement.query(
        By.css('sbb-icon[svgIcon="fpl:disruption"]')
      );
      expect(ghettoboxIcon).toBeTruthy();
    });

    it('should be wrapped with an <a> tag with href=/test?debug=false#test', () => {
      const linkHref = ghettoboxDebugElement
        .query(By.css('.sbb-ghettobox-link'))
        .nativeElement.getAttribute('href');
      expect(linkHref).toBe('/test?debug=false#test');
    });
  });
});
