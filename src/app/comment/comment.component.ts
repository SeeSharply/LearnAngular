import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Location }     from '@angular/common';

import {Comment} from '../data/comment';
import {CommentService} from '../data/comment.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'comment',
	templateUrl: './comment.component.html'
})

export class CommentComponent implements OnInit {
	BlogTitle:string;
	private comments:Comment[];
	private com:Comment=new Comment();
	private blogId:number;
	constructor(
		private cService: CommentService,
		private aRoute: ActivatedRoute,
		private router: Router,
		private location: Location
	){}
	ngOnInit() { 
			let id=this.aRoute.params
		.subscribe(params=>{
			this.comments=this.cService.GetBlogComments(+params["id"]);
			this.blogId=+params["id"];
			this.BlogTitle=params["title"];
		})
	}
	sumComment()
	{
		if(this.com.userName&&this.com.content)
		{
			this.com.blogId=this.blogId;
			this.cService.AddComment(this.com);
			this.comments=this.cService.GetBlogComments(this.blogId);
			console.log(this.comments);
			this.com=new Comment();			
		}
	}
}