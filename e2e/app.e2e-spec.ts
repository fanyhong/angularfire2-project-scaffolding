import { Angular2Rc5Page } from './app.po';

describe('angular2-rc5 App', function() {
  let page: Angular2Rc5Page;

  beforeEach(() => {
    page = new Angular2Rc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
