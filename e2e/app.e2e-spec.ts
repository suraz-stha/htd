import { HalftoneAppPage } from './app.po';

describe('halftone-app App', () => {
  let page: HalftoneAppPage;

  beforeEach(() => {
    page = new HalftoneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
