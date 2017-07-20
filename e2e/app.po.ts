import { browser, by, element } from 'protractor';

export class PersonalChatCPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pcc-root h1')).getText();
  }
}
