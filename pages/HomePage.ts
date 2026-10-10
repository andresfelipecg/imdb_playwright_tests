
import { type Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto('https://www.imdb.com/');
  }

  async searchMovie(movie: string) {
    await this.page.getByTestId('suggestion-search').fill(movie);
    await this.page.getByLabel('Submit search').click();
  }

  async openTop250FromMenu() {
    await this.page.getByLabel('Open navigation drawer').click();
    await this.page
      .getByText('Top 250 movies', { exact: true })
      .first()
      .click();
  }
}
