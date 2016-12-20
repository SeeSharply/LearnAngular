import { TestBed, inject } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

describe('a article component', () => {
	let component: ArticleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ArticleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ArticleComponent], (ArticleComponent) => {
		component = ArticleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});