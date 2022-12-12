const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless:false, slowMo:400});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts');
    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.click('#confirmButton');
    page.on('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('meu texto!');
    })
    await page.click('#promtButton');
    await browser.close();
})()