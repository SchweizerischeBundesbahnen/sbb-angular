import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriTypesService as GraphicTypes } from '../core/esri-types/esri-types.service';
import { GraphicService } from '../core/graphic/graphic.service';
import { HitTestService } from '../core/hit-test/hit-test.service';

import { EsriTypesService } from './esri-types/esri-types.service';
import { EsriWebSceneComponent } from './esri-web-scene.component';

describe('EsriWebSceneComponent', () => {
  let component: EsriWebSceneComponent;
  let fixture: ComponentFixture<EsriWebSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsriWebSceneComponent],
      providers: [EsriTypesService, GraphicService, GraphicTypes, HitTestService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsriWebSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
