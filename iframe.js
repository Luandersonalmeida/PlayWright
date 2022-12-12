const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/frames');

    const frame1 = await page.frame({url: /\/sample/});

    const heading1 = await frame1.$('h1')
    console.log(await heading1.innerText(), "receba!!");
    await browser.close();
})()