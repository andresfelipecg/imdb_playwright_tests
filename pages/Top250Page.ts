
import { type Page } from '@playwright/test';

export class Top250Page {
  constructor(private readonly page: Page) {}

  async openFirstMovie() {
    const movieLinks = this.page
      .getByRole('link')
      .filter({
        has: this.page.getByRole('heading', { level: 4 }),
      });

    await movieLinks.first().click();
  }
}
