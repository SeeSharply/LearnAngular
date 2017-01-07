import { Component } from '@angular/core';
import {BLOGS,Blog} from '../data/blog';
import {BlogService} from './../data/blog.service';

import {Observable} from 'rxjs';

@Component({
	selector: 'ngarticle',
	templateUrl: './article.component.html',
	styleUrls:['./article.component.css']
})

export class ArticleComponent  {
	blogList:Blog[];
	selectedBlog:Blog;
	editStr:string;
	constructor(private bService:BlogService)
	{
		bService.getBlogs().then(x=>{this.blogList=x});
	}
	selectBlog(id:number)
	{
		this.bService.getSelectedBlog(id).then(blog=>{this.selectedBlog=blog;console.log(blog);});
	}
	doAdd()
    {
	   if(this.editStr.length>0)
	   {
		 this.bService.create(this.editStr)
	 	 .then(x=>{
		 this.blogList.push(x);this.editStr=""
		 });
	   }
   }
}