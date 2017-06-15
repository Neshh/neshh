import { NeshhPage } from './app.po';

describe('neshh App', function() {
  let page: NeshhPage;

  beforeEach(() => {
    page = new NeshhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
