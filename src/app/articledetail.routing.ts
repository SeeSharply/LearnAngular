import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentComponent }   from './comment/comment.component';
import { ArticledetailComponent }   from './articledetail/articledetail.component';

const articleDetailRoutes: Routes = [
  {
    path: 'articledetail/:id',
    component: ArticledetailComponent,
    children: [
      {
        path: 'comment',
        component: CommentComponent
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
