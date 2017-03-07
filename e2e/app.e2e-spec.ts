import { WorkProjectPage } from './app.po';

describe('work-project App', () => {
  let page: WorkProjectPage;

  beforeEach(() => {
    page = new WorkProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
