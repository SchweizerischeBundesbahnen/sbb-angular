import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentViewerComponent } from '../shared/component-viewer/component-viewer.component';
import { MarkdownViewerComponent } from '../shared/markdown-viewer/markdown-viewer.component';

import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    data: { library: 'angular-public' },
    children: [
      {
        path: '',
        redirectTo: 'introduction/getting-started',
        component: MarkdownViewerComponent
      },
      {
        path: 'introduction/:id',
        component: MarkdownViewerComponent
      },
      {
        path: 'components/:id',
        component: ComponentViewerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
