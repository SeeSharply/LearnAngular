import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleEditComponent }   from './articleedit/articleedit.component';
import { ArticledetailComponent }   from './articledetail/articledetail.component';

const articleDetailRoutes: Routes = [
  {
    path: 'articledetail/:id',
    component: ArticledetailComponent,
    children: [
      {
        path: 'articleedit',
        component: ArticleEditComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(articleDetailRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleDetailRoutingModule { }
