import { Component, OnInit,Input ,HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Location }     from '@angular/common';
import {BLOGS,Blog} from '../data/blog';
import {BlogService} from '../data/blog.service'

import 'rxjs/add/operator/switchMap';
import 'rxjs';
@Component({
	selector: 'articleedit',
	templateUrl: './articleEdit.component.html',
	styleUrls:['./articleEdit.component.css']
})

export class ArticleEditComponent implements OnInit {
	blog:Blog;
	id:number=0;
	constructor(
	  private bService: BlogService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}
	ngOnInit()
	{
		let id=this.route.params
		.subscribe(x=>{
			console.log(x["blogparam"]);
			this.blog=JSON.parse(this.blog=x['blogparam']) as Blog;
			if(this.blog)
			{
				this.id=this.blog.id;
			}
			//alert(this.blog.profile);
			
		});
	}
	saveBlog()
	{
		if(this.id>0)
		{
			this.bService.editBlog(this.blog);
		}
		else
		{
			this.bService.addBlog(this.blog);
		}
	}
}