// Workaround for: https://github.com/bazelbuild/rules_nodejs/issues/1265
/// <reference types="arcgis-js-api" />

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbb-esri-web-map-showcase',
  templateUrl: './esri-web-map-showcase.component.html',
  styleUrls: ['./esri-web-map-showcase.component.css']
})
export class EsriWebMapShowcaseComponent implements OnInit {
  public activeExtent: { xmin: number; xmax: number; ymin: number; ymax: number };
  public clickedPoint: { x: number; y: number };
  public mapView: __esri.MapView;
  ngOnInit(): void {}

  mapExtentChanged(extent: __esri.Extent) {
    const { xmin, xmax, ymin, ymax } = extent;
    this.activeExtent = { xmin: xmin, xmax: xmax, ymin: ymin, ymax: ymax };
  }

  mapReady(mv: __esri.MapView) {
    this.mapView = mv;
  }

  mapClicked(clickResult: { clickedPoint: __esri.Point; clickedGraphics: __esri.Graphic[] }) {
    this.clickedPoint = { x: clickResult.clickedPoint.x, y: clickResult.clickedPoint.y };
  }
}
