import { SilabasPage } from './app.po';

describe('silabas App', () => {
  let page: SilabasPage;

  beforeEach(() => {
    page = new SilabasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
