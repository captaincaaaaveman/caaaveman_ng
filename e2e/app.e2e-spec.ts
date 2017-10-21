import { CaaavemanPage } from './app.po';

describe('caaaveman App', () => {
  let page: CaaavemanPage;

  beforeEach(() => {
    page = new CaaavemanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
