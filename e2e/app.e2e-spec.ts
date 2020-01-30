import { ProjektStudiaPage } from './app.po';

describe('projekt-studia App', function() {
  let page: ProjektStudiaPage;

  beforeEach(() => {
    page = new ProjektStudiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
