const { chromium } = require('playwright');

(async() =>{
    const browser = await chromium.launch({headless:false, slowMo:500});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');

    const firstname = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstname.isDisabled());
    console.log(await firstname.isEnabled());
    console.log(await firstname.isEditable());
    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());
    

    await browser.close();
})()