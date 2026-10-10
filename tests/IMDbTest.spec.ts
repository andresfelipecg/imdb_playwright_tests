
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { Top250Page } from '../pages/Top250Page';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';

test('TC1 Search and Validate Movie', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const movieDetailsPage = new MovieDetailsPage(page);

  const movie = 'Inception';

  await homePage.open();
  await homePage.searchMovie(movie);
  await searchResultsPage.openMovie(movie);

  await expect(movieDetailsPage.title).toHaveText(movie);
});

test('TC2 Navigate Top 250 Movies', async ({ page }) => {
  const homePage = new HomePage(page);
  const top250Page = new Top250Page(page);
  const movieDetailsPage = new MovieDetailsPage(page);

  await homePage.open();
  await homePage.openTop250FromMenu();
  await top250Page.openFirstMovie();

  await expect(movieDetailsPage.title).toBeVisible();
  await expect(movieDetailsPage.rating).toBeVisible();
  await expect(movieDetailsPage.releaseYear.first()).toBeVisible();
});
