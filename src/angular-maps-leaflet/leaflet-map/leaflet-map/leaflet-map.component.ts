import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  control,
  Control,
  FitBoundsOptions,
  LatLng,
  Layer,
  LeafletEvent,
  LeafletMouseEvent,
  Map,
  MapOptions,
  ZoomPanOptions
} from 'leaflet';

import { DEFAULT_CENTER, DEFAULT_ZOOM } from './config/leaflet.const';
import { LayersControl, LayersControlLayer } from './model/map-config.model';

@Component({
  selector: 'sbb-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  /** The leaflet map instance. Gets exposed through mapReady output. */
  private _map: Map;
  /** The layerscontrol to change visibility of the maplayers. */
  private _layersControl: Control.Layers;

  /**
   * This config specifies basic settings for your leaflet map.
   * Get more information at https://leafletjs.com/reference-1.6.0.html#map-option.
   */
  @Input() mapOptions: MapOptions;
  /** This config specifies basemaps and overlays to show on the map & in layerscontrol. */
  @Input() layersControlConfig: LayersControl;

  /** Fires, when the map has been clicked. */
  @Output() mapClicked: EventEmitter<LeafletMouseEvent> = new EventEmitter();
  /** Fires, when the map has been moved or zoomed. */
  @Output() mapExtentChanged: EventEmitter<LeafletEvent> = new EventEmitter();
  /** Fires when the map has loaded and returns the L.Map instance. */
  @Output() mapReady: EventEmitter<Map> = new EventEmitter();

  /** Returns the reference to the layer control. */
  public get layersControl(): Control.Layers {
    return this._layersControl;
  }

  ngOnInit() {
    if (!this.mapOptions) {
      this.mapOptions = {};
    }

    this._setup();
    this._registerEventHandlers();
  }

  /** @docs-private */
  private _setup() {
    this._initializeMap();
    this._initializeLayersControl();
  }

  /** @docs-private */
  private _initializeLayersControl() {
    if (!this.layersControlConfig) {
      return;
    }
    const { baseLayers, overLays } = this.layersControlConfig;
    this._layersControl = control.layers();
    if (baseLayers) {
      baseLayers.forEach(l => {
        this._layersControl.addBaseLayer(l.layer, l.title);
        if (l.visible) {
          l.layer.addTo(this._map);
        }
      });
    }
    if (overLays) {
      overLays.forEach(l => {
        this._layersControl.addOverlay(l.layer, l.title);
        if (l.visible) {
          l.layer.addTo(this._map);
        }
      });
    }
    this._layersControl.addTo(this._map);
  }

  /** @docs-private */
  private _initializeMap() {
    const { center, zoom } = this.mapOptions;
    this._map = new Map(this._elementRef.nativeElement, this.mapOptions).setView(
      center ? center : DEFAULT_CENTER,
      zoom ? zoom : DEFAULT_ZOOM
    );
  }

  /** @docs-private */
  private _registerEventHandlers() {
    this._map.whenReady(() => {
      this.mapReady.next(this._map);
      // update map size when map is ready
      setTimeout(() => this._map.invalidateSize(), 200);
    });

    this._map.on('click', this._mapClicked.bind(this));
    this._map.on('move zoom', this._mapExtentChanged.bind(this));
  }

  private _mapClicked(e: L.LeafletMouseEvent) {
    this.mapClicked.next(e);
  }

  private _mapExtentChanged(e: L.LeafletEvent) {
    this.mapExtentChanged.next(e);
  }

  /** Centers the map at a given point and an optional zoom level. */
  public flyTo(center: LatLng, zoomLvl?: number, zoomPanOptions?: ZoomPanOptions) {
    this._map.flyTo(center, zoomLvl, zoomPanOptions);
  }

  /** Centers the map to given bounds. */
  public flyToBounds(bounds: L.LatLngBounds, fitBoundsOptions?: FitBoundsOptions) {
    this._map.flyToBounds(bounds, fitBoundsOptions);
  }

  /**
   * Adds a new overlay to the map.
   */
  public addOverlayToMap(layersControlLayer: LayersControlLayer) {
    const { layer, title, visible } = layersControlLayer;
    this._layersControl.addOverlay(layer, title);
    if (visible) {
      layer.addTo(this._map);
    }
  }

  /**
   * Removes a given layer from the map.
   * @param layer the layer to remove
   */
  public removeLayerFromMap(layer: Layer) {
    this._layersControl.removeLayer(layer);
    layer.removeFrom(this._map);
  }
}
