import { NgModuleRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

/*
 * Common setup / initialization for all unit tests in sbb-angular.
 */

const testBed = TestBed.initTestEnvironment(
  [BrowserDynamicTestingModule],
  platformBrowserDynamicTesting()
);
patchTestBedToDestroyFixturesAfterEveryTest(testBed);
patchConsoleToDetectWarningsOrErrors();

(window as any).module = {};
(window as any).isNode = false;
(window as any).isBrowser = true;
(window as any).global = window;

/**
 * Monkey-patches TestBed.resetTestingModule such that any errors that occur during component
 * destruction are thrown instead of silently logged. Also runs TestBed.resetTestingModule after
 * each unit test.
 *
 * Without this patch, the combination of two behaviors is problematic for sbb-angular:
 * - TestBed.resetTestingModule catches errors thrown on fixture destruction and logs them without
 *     the errors ever being thrown. This means that any component errors that occur in ngOnDestroy
 *     can encounter errors silently and still pass unit tests.
 * - TestBed.resetTestingModule is only called *before* a test is run, meaning that even *if* the
 *    aforementioned errors were thrown, they would be reported for the wrong test (the test that's
 *    about to start, not the test that just finished).
 */
function patchTestBedToDestroyFixturesAfterEveryTest(testBedInstance: TestBed) {
  // Original resetTestingModule function of the TestBed.
  const resetTestingModule = testBedInstance.resetTestingModule;

  // Monkey-patch the resetTestingModule to destroy fixtures outside of a try/catch block.
  // With https://github.com/angular/angular/commit/2c5a67134198a090a24f6671dcdb7b102fea6eba
  // errors when destroying components are no longer causing Jasmine to fail.
  testBedInstance.resetTestingModule = function (this: {
    /** List of active fixtures in the current testing module. */
    _activeFixtures: ComponentFixture<any>[];
    /** Module Ref used in the Ivy TestBed for creating components. */
    _testModuleRef?: NgModuleRef<unknown> | null;
    /** Module Ref used in the View Engine TestBed for creating components. */
    _moduleRef?: NgModuleRef<unknown> | null;
  }) {
    try {
      const moduleRef = this._testModuleRef || this._moduleRef;
      this._activeFixtures.forEach((fixture: ComponentFixture<any>) => fixture.destroy());
      // Destroy the TestBed `NgModule` reference to clear out shared styles that would
      // otherwise remain in DOM and significantly increase memory consumption in browsers.
      // This increased consumption then results in noticeable test instability and slow-down.
      // See: https://github.com/angular/angular/issues/31834.
      if (moduleRef != null) {
        moduleRef.destroy();
      }
    } finally {
      this._activeFixtures = [];
      // Regardless of errors or not, run the original reset testing module function.
      resetTestingModule.call(this);
    }
  };

  // Angular's testing package resets the testing module before each test. This doesn't work well
  // for us because it doesn't allow developers to see what test actually failed.
  // Fixing this by resetting the testing module after each test.
  // https://github.com/angular/angular/blob/master/packages/core/testing/src/before_each.ts#L25
  afterEach(() => testBedInstance.resetTestingModule());
}

/**
 * Monkey patch console warn and error to fail if a test makes calls to console.warn or console.error.
 * https://github.com/angular/angular/issues/36430
 */
function patchConsoleToDetectWarningsOrErrors(): void {
  console.warn = function (message?: any, ...optionalParams: any[]): void {
    const params = optionalParams ? `\nParams: ${optionalParams}` : '';

    // ESRI JS API Requires WebGL, which is deactivated in the capabilities in Test-Chromium on Github-CI:
    if (params.indexOf('#validate(),WebGL is required but not supported') !== -1) {
      return;
    }

    throw new Error(`Test contained console warning:\n${message}${params}`);
  };
  console.error = function (message?: any, ...optionalParams: any[]): void {
    const params = optionalParams ? `\nParams: ${optionalParams}` : '';
    throw new Error(`Test contained console error:\n${message}${params}`);
  };
}
