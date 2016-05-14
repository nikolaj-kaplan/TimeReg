export class TimeRegPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('time-reg-app h1')).getText();
  }
}
