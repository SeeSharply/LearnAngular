import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ArticleDetailRoutingModule } from './articledetail.routing';

import {BlogService} from './data/blog.service';
import {CommentService} from './data/comment.service';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticledetailComponent } from './articledetail/articledetail.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticledetailComponent,
    CommentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleDetailRoutingModule,  
    AppRoutingModule

  ],
  providers: [BlogService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
