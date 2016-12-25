import { Component, OnInit,Input ,HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { Location }     from '@angular/common';
import {BLOGS,Blog} from '../data/blog';
import {BlogService} from '../data/blog.service'

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'article-detail',
	templateUrl: './articledetail.component.html',
	styleUrls:['./articledetail.component.css'],

	animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})

export class ArticledetailComponent implements OnInit {
	@HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }
	@Input() blog:Blog;
	constructor(
	  private bService: BlogService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit() {
		let id=this.route.params
		.switchMap((params: Params) => params['id'])
		.subscribe(x=>this.blog=this.bService.getSelectedBlog(+x))
	 }
	 back()
	 {
		 this.location.back();
	 }
}