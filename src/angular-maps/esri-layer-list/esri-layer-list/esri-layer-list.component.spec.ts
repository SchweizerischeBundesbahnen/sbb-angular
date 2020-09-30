import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SbbEsriTypesService } from '@sbb-esta/angular-maps/core';

import { SbbEsriLayerList } from './esri-layer-list.component';

describe('EsriLayerListComponent', () => {
  let component: SbbEsriLayerList;
  let fixture: ComponentFixture<SbbEsriLayerList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SbbEsriLayerList],
      providers: [SbbEsriTypesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbbEsriLayerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
