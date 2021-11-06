const puppeteer = require('puppeteer');
const url = "https://strawpoll.vote/polls/78w7a8yk/";
const votes = 3; // Number of votes to cast.
const option = 1; // Option to vote for.

(async () => {
  for (let i = 0; i < votes; i++) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    await page.click(`.v-item-group > div:nth-child(${option})`)
    await page.waitFor(1000);
    await page.click('.accent')
    await page.waitFor(1000);
    await browser.close();
    await page.waitFor(1000);
  }
})();