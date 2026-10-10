
import { type Page } from '@playwright/test';

export class SearchResultsPage {
  constructor(private readonly page: Page) {}

  async openMovie(movie: string) {
    await this.page
      .getByRole('link', { name: movie, exact: true })
      .first()
      .click();
  }
}
