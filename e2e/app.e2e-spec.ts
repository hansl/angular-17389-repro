import { AngularIssue17389ReproPage } from './app.po';

describe('angular-issue17389-repro App', () => {
  let page: AngularIssue17389ReproPage;

  beforeEach(() => {
    page = new AngularIssue17389ReproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
