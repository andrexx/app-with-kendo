import { AppWithKendoPage } from './app.po';

describe('app-with-kendo App', () => {
  let page: AppWithKendoPage;

  beforeEach(() => {
    page = new AppWithKendoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
