import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';
import { SbbButtonModule } from '@sbb-esta/angular-public/button';

import { SbbPaginationModule } from '../pagination.module';

import { SbbNavigation, SbbNavigationPageChangeEvent } from './navigation';

@Component({
  selector: 'sbb-navigation-test',
  template: `
    <sbb-navigation
      #navigation
      (pageChange)="onPageChangeNavigation($event)"
      [nextPage]="nextPage"
      [previousPage]="previousPage"
    ></sbb-navigation>
    <input type="text" name="newPage" [(ngModel)]="newPage.title" />
    <button id="new-page-button" sbbButton (click)="addPage()">Add new page</button>
  `,
})
export class NavigationTestComponent {
  @ViewChild('navigation', { static: true }) navigation: SbbNavigation;

  newPage = { title: 'paginaTest' };

  pages = ['Einführung', 'Kapitel 1', 'Kapitel 2', 'Kapitel 3'].map((page, index) => {
    return { title: page, index: index };
  });

  hasPrevious = this.pages[1];
  hasNext = this.pages[2];

  get previousPage(): string | null {
    return this.hasPrevious ? this.hasPrevious.title : null;
  }
  get nextPage(): string | null {
    return this.hasNext ? this.hasNext.title : null;
  }

  onPageChangeNavigation($event: SbbNavigationPageChangeEvent) {
    if ($event === 'next') {
      this.hasPrevious = this.hasNext;
      this.hasNext = this.pages[this.hasNext.index + 1];
    } else {
      this.hasNext = this.hasPrevious;
      this.hasPrevious = this.pages[this.hasPrevious.index - 1];
    }
  }

  addPage() {
    this.pages.push({ title: this.newPage.title, index: this.pages.length });
    this.newPage.title = '';
  }
}

describe('SbbNavigation', () => {
  let component: SbbNavigation;
  let fixture: ComponentFixture<SbbNavigation>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbIconModule, SbbIconTestingModule, CommonModule, RouterTestingModule],
        declarations: [SbbNavigation],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SbbNavigation behaviour', () => {
  let component: NavigationTestComponent;
  let fixture: ComponentFixture<NavigationTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          SbbPaginationModule,
          SbbIconTestingModule,
          RouterTestingModule,
          SbbButtonModule,
          FormsModule,
        ],
        declarations: [NavigationTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTestComponent);
    component = fixture.componentInstance;
  });

  it('it verifies the initial state of the navigation buttons', () => {
    fixture.detectChanges();

    const buttonsReference = fixture.debugElement.queryAll(By.css('.sbb-navigation-item > button'));
    const previousButton = buttonsReference[0].nativeElement;
    const nextButton = buttonsReference[1].nativeElement;

    expect(previousButton.attributes['title']).toBeTruthy();
    expect(previousButton.attributes['title'].value).toBe('Kapitel 1');
    expect(nextButton.attributes['title']).toBeTruthy();
    expect(nextButton.attributes['title'].value).toBe('Kapitel 2');
  });

  it('it verifies the click to next chapter', () => {
    fixture.detectChanges();
    const buttonsReference = fixture.debugElement.queryAll(By.css('.sbb-navigation-item > button'));
    const nextButton = buttonsReference[1].nativeElement;
    nextButton.click();
    fixture.detectChanges();

    expect(nextButton.attributes['title'].value).toBe('Kapitel 3');
  });

  it('it verifies the click to previous chapter', () => {
    fixture.detectChanges();
    const buttonsReference = fixture.debugElement.queryAll(By.css('.sbb-navigation-item > button'));
    const nextButton = buttonsReference[0].nativeElement;
    nextButton.click();
    fixture.detectChanges();

    expect(nextButton.attributes['title'].value).toBe('Einführung');
  });

  it('it verifies the adding of new page', () => {
    const buttonAddPage = fixture.debugElement.query(By.css('#new-page-button')).nativeElement;
    buttonAddPage.click();
    fixture.detectChanges();

    expect(component.pages.length).toBe(5);
  });

  it('it verifies the navigation to new page', () => {
    const buttonAddPage = fixture.debugElement.query(By.css('#new-page-button')).nativeElement;
    buttonAddPage.click();
    fixture.detectChanges();

    expect(component.pages.length).toBe(5);

    const buttonsReference = fixture.debugElement.queryAll(By.css('.sbb-navigation-item > button'));
    const nextButton = buttonsReference[1].nativeElement;
    nextButton.click();
    fixture.detectChanges();
    nextButton.click();
    fixture.detectChanges();

    expect(nextButton.attributes['title'].value).toBe('paginaTest');
  });
});
