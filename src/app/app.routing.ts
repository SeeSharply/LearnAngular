import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';

const routes:Routes=[
{ path: 'article',component: ArticleComponent},
{ path: '',redirectTo:"/article",pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}