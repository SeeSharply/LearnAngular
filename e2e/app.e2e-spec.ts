import { TestAngularPage } from './app.po';

describe('test-angular App', function() {
  let page: TestAngularPage;

  beforeEach(() => {
    page = new TestAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
