import { AngularBeforeEachAsyncIssueDemonstrationPage } from './app.po';

describe('angular-before-each-async-issue-demonstration App', () => {
  let page: AngularBeforeEachAsyncIssueDemonstrationPage;

  beforeEach(() => {
    page = new AngularBeforeEachAsyncIssueDemonstrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
