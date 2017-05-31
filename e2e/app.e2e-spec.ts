import { IntactViewPage } from './app.po';

describe('intact-view App', () => {
  let page: IntactViewPage;

  beforeEach(() => {
    page = new IntactViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
