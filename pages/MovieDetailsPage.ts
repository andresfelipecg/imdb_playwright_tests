
import { type Page } from '@playwright/test';

export class MovieDetailsPage {
  constructor(private readonly page: Page) {}

  get title() {
    return this.page.getByTestId('hero__primary-text');
  }

  get rating() {
    return this.page.getByTestId(
      'hero-rating-bar__aggregate-rating__score'
    ).first();
  }

  get releaseYear() {
    return this.page.getByRole('link', {
      name: /^\d{4}$/,
    });
  }
}
