import { PersonalChatCPage } from './app.po';

describe('personal-chat-c App', () => {
  let page: PersonalChatCPage;

  beforeEach(() => {
    page = new PersonalChatCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to pcc!!');
  });
});
