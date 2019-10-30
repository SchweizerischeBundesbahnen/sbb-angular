import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComponentViewerBase } from '../../../shared/component-viewer-base';
import { ExampleProvider } from '../../../shared/example-provider';
import { HtmlLoader } from '../../../shared/html-loader.service';

@Component({
  selector: 'sbb-public-component-viewer',
  templateUrl: './business-component-viewer.component.html',
  styleUrls: ['./business-component-viewer.component.scss']
})
export class BusinessComponentViewerComponent extends ComponentViewerBase {
  constructor(
    htmlLoader: HtmlLoader,
    exampleProvider: ExampleProvider,
    route: ActivatedRoute,
    renderer: Renderer2
  ) {
    super(htmlLoader, exampleProvider, route, renderer);
  }
}
