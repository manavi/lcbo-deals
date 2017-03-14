import { LcboDealsPage } from './app.po';

describe('lcbo-deals App', () => {
  let page: LcboDealsPage;

  beforeEach(() => {
    page = new LcboDealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
