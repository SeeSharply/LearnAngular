import { TestBed, inject } from '@angular/core/testing';

import { CommentComponent } from './comment.component';

describe('a comment component', () => {
	let component: CommentComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CommentComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CommentComponent], (CommentComponent) => {
		component = CommentComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});