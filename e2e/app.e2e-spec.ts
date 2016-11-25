import { Ng2HealthcheckPage } from './app.po';

describe('ng2-healthcheck App', function() {
  let page: Ng2HealthcheckPage;

  beforeEach(() => {
    page = new Ng2HealthcheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
