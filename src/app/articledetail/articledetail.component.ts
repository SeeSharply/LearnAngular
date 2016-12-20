import { Component, OnInit,Input } from '@angular/core';
import {BLOGS,Blog} from '../data/blog';

@Component({
	selector: 'article-detail',
	templateUrl: './articledetail.component.html',
	styleUrls:['./articledetail.component.css']
})

export class ArticledetailComponent implements OnInit {
	@Input() blog:Blog;
	ngOnInit() { }
}