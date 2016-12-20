import { TestBed, inject } from '@angular/core/testing';

import { ArticledetailComponent } from './articledetail.component';

describe('a articledetail component', () => {
	let component: ArticledetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ArticledetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ArticledetailComponent], (ArticledetailComponent) => {
		component = ArticledetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});