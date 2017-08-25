import { JavanPage } from './app.po';

describe('javan App', function() {
  let page: JavanPage;

  beforeEach(() => {
    page = new JavanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
