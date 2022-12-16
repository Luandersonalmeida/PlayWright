const { chromium } = require('playwright')
const HomePage = require('../models/HomePage')
const LoginPage = require('../models/LoginPage')

describe('Applitools demo page', () =>{
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async () => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    })

    afterAll(async () => {
        await context.close();
        await browser.close();

    })

    it('Shoul be able to login', async () => {
        await loginPage.login('username','password')
        expect(await page.title()).not.toBeNull();
    })

    it('Shoul de logged in as Jack Gomes', async () => {
        expect(await homePage.getUserName()).toBe('Jack Gomes')
    })

    it('Shoul have total balance of $350', async () => {
    expect(await homePage.getBalance('total')).toBe('$350')
    })

    it('Shoul have credit avaliable of $17800', async () => {
        expect(await homePage.getBalance('credit')).toBe('$17,800')
    })

    it('Shoul have due today of $180', async () => {
        expect(await homePage.getBalance('due')).toBe('$180')

    })
})