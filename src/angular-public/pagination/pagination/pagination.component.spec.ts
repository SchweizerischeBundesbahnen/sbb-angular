import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SbbIconModule } from '@sbb-esta/angular-core/icon';
import { SbbIconTestingModule } from '@sbb-esta/angular-core/icon/testing';
import { dispatchEvent } from '@sbb-esta/angular-core/testing';
import { createMouseEvent } from '@sbb-esta/angular-core/testing';

import { SbbPaginationModule } from '../pagination.module';

import { SbbPagination } from './pagination.component';

@Component({
  selector: 'sbb-pagination-test',
  template: `
    <sbb-pagination
      #pagination
      (pageChange)="onPageChange($event)"
      [length]="length"
      [pageIndex]="pageIndex"
    ></sbb-pagination>
  `,
})
export class PaginationTestComponent {
  length = 5;
  pageIndex = 0;

  @ViewChild('pagination', { static: true }) pagination: SbbPagination;

  onPageChange(event: any) {}
}

describe('SbbPagination', () => {
  let component: SbbPagination;
  let fixture: ComponentFixture<SbbPagination>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbIconModule, SbbIconTestingModule, CommonModule, RouterTestingModule],
        declarations: [SbbPagination],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbPagination);
    component = fixture.componentInstance;
    component.length = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SbbPagination behaviour', () => {
  let component: PaginationTestComponent;
  let fixture: ComponentFixture<PaginationTestComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SbbPaginationModule, SbbIconTestingModule, RouterTestingModule],
        declarations: [PaginationTestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTestComponent);
    component = fixture.componentInstance;
    component.length = 10;
    component.pageIndex = 4;
    fixture.detectChanges();
  });

  describe('with more than 5 pages', () => {
    describe('ellipsis', () => {
      it('should show one ellipsis with first,second and third page selected', () => {
        component.length = 10;
        component.pageIndex = 0;
        fixture.detectChanges();
        let ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(1);
        component.pageIndex = 1;
        fixture.detectChanges();
        ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(1);
        component.pageIndex = 2;
        fixture.detectChanges();
        ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(1);
        component.pageIndex = 3;
        fixture.detectChanges();
        ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(2);
      });

      it('should show one ellipsis with last, last -1 and last-2 page selected', () => {
        component.length = 10;
        component.pageIndex = 9;
        fixture.detectChanges();
        let ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(1);
        component.pageIndex = 8;
        fixture.detectChanges();
        ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(1);
        component.pageIndex = 7;
        fixture.detectChanges();
        ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(1);
        component.pageIndex = 6;
        fixture.detectChanges();
        ellipsisItems = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-ellipsis'));
        expect(ellipsisItems.length).toBe(2);
      });
    });
  });

  describe('when clicking on the right arrow', () => {
    it('should go to the next page', () => {
      component.length = 10;
      component.pageIndex = 5;
      fixture.detectChanges();
      const pageNumbers = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-boundary'));
      dispatchEvent(pageNumbers[1].nativeElement, createMouseEvent('click'));
      fixture.detectChanges();
      expect(component.pagination.pageIndex).toBe(6);
    });
  });

  describe('when clicking on the left arrow', () => {
    it('should go to the previous page', () => {
      component.length = 10;
      component.pageIndex = 5;
      fixture.detectChanges();
      const pageNumbers = fixture.debugElement.queryAll(By.css('.sbb-pagination-item-boundary'));
      dispatchEvent(pageNumbers[0].nativeElement, createMouseEvent('click'));
      fixture.detectChanges();
      expect(component.pagination.pageIndex).toBe(4);
    });
  });
});
