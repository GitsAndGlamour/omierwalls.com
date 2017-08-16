import { DomainPage } from './app.po';

describe('domain App', () => {
  let page: DomainPage;

  beforeEach(() => {
    page = new DomainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
