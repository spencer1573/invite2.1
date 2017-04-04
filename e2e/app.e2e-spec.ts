import { Invite2Page } from './app.po';

describe('invite2 App', () => {
  let page: Invite2Page;

  beforeEach(() => {
    page = new Invite2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
