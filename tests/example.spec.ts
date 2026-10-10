import { test, expect } from '@playwright/test';


test.skip('TC1 Search and Validate Movie', async ({page}) =>{

    //const context= await browser.newContext();
    //const page=await context.newPage();
    //Navigate to the IMDb homepage.
    await page.goto("https://www.imdb.com/");
    console.log(await page.title());

    //Check captcha
    const movie='Inception';


     await page.getByTestId('suggestion-search').fill(movie); 
     await page.getByLabel('Submit search').click();

     //click in the movie after get the results

     await page.getByRole('link', { name: movie,exact:true}).first().click();

     //Assertion
     await expect(page.getByTestId('hero__pageTitle'))
    .toHaveText(movie);
}
);

test.skip('TC2 Navigate Top 250 Movies', async ({page}) =>{

     await page.goto("https://www.imdb.com/");
    console.log(await page.title());

    //Navigate top 250
    //await page.getByRole('button',{name:'Menu'}).click();
    await page.getByLabel('Open navigation drawer').click();
    await page.getByText('Top 250 movies', { exact: true }).first().click();

    //select frist movie

    const movielinks= await page.getByRole('link').filter({has:page.getByRole('heading',{level:4})});

    console.log('total movies counting:',await movielinks.count());
    
    //Click
    await movielinks.first().click();
    
    //Validate: Movie title is visible. Rating is displayed and Year of release is shown.
    
    // Validate: Movie title is visible.
    await expect(page.getByTestId('hero__primary-text')).toBeVisible();

    // Validate: Rating is displayed.
    await expect(page.getByTestId('hero-rating-bar__aggregate-rating__score').first()).toBeVisible();

    // Validate: Year of release is shown. Use of regex due  the year is dynamic and there is no unique identifier for the list
    await page.getByRole('link', { name: /^\d{4}$/ })

}
);
