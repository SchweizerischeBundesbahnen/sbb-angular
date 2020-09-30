import { Injectable } from '@angular/core';

// tslint:disable-next-line: naming-convention
function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class SbbWindowRef {
  /**
   * The global native browser window object.
   */
  get nativeWindow(): any {
    return _window();
  }
}

declare global {
  interface Window {
    ng2recaptchaloaded: () => void;
  }
}
