import { IntactPortalPage } from './app.po';

describe('intact-portal App', () => {
  let page: IntactPortalPage;

  beforeEach(() => {
    page = new IntactPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('app works!');
  });
});
