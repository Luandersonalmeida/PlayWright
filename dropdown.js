const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless:false, slowMo:400});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');

    await dropdown.selectOption({value:'1'})

    await dropdown.selectOption({label:'Option 2'})

    await dropdown.selectOption({index:1})

    const avaliableOptions = await dropdown.$$('option');
    for (let i = 0; 1 < avaliableOptions.length; i++) {
        console.log(await avaliableOptions[i].innerText());
    }
    await browser.close();
})()