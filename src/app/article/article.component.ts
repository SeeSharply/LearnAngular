import { Component } from '@angular/core';
import {BLOGS,Blog} from '../data/blog';

@Component({
	selector: 'ngarticle',
	templateUrl: './article.component.html',
	styleUrls:['./article.component.css']
})

export class ArticleComponent  {
	blogList:Blog[];
	selectedBlog:Blog;
	constructor()
	{
		this.blogList=BLOGS;
	}
	selectBlog(blog:Blog)
	{
		this.selectedBlog=blog;
	}
}