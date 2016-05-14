import { TimeRegPage } from './app.po';

describe('time-reg App', function() {
  let page: TimeRegPage;

  beforeEach(() => {
    page = new TimeRegPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('time-reg works!');
  });
});
