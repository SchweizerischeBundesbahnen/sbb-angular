import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  ProcessflowComponent,
  ProcessflowStep
} from '@sbb-esta/angular-public';

@Component({
  selector: 'sbb-processflow-showcase',
  templateUrl: './processflow-showcase.component.html',
  styleUrls: ['./processflow-showcase.component.scss']
})
export class ProcessflowShowcaseComponent implements AfterViewInit {
  @ViewChild('processflow') processflow: ProcessflowComponent;

  ngAfterViewInit(): void {
    this.processflow.stepChange.subscribe((s: ProcessflowStep) => {
      console.log(s.title);
    });
  }

  reset() {
    this.processflow.reset();
  }
}
