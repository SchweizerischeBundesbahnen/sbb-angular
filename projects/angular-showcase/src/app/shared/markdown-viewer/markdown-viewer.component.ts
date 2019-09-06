import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sbb-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss']
})
export class MarkdownViewerComponent implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    http: HttpClient,
    route: ActivatedRoute,
    elementRef: ElementRef,
    renderer: Renderer2
  ) {
    combineLatest(route.params, route.data, (p, d) => ({ ...p, ...d }))
      .pipe(
        takeUntil(this._destroyed),
        switchMap(({ id, library }) =>
          http.get(`assets/docs/${library}/${id}.html`, { responseType: 'text' })
        )
      )
      .subscribe(c => renderer.setProperty(elementRef.nativeElement, 'innerHTML', c));
  }

  ngOnDestroy(): void {
    this._destroyed.next();
  }
}
