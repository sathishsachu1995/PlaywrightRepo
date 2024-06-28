import { Page,Browser,BrowserContext, chromium } from "@playwright/test";

class salesforcePage
{
    userNameInput : string = '#username'
    userPasswordInput : string = '#password'
    loginButton : string = '#Login'

    async setup(): Promise<{page : Page, browser : Browser, context : BrowserContext}>{
        const browser = await chromium.launch({headless: false})
        const context = await browser.newContext()
        const page = await context.newPage()
        return{page,browser,context}
    }

    async navigate(page: Page, username : string, password : string): Promise<void>{
        await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator(this.userNameInput).fill(username)
        await page.locator(this.userPasswordInput).fill(password)
        await page.locator(this.loginButton).click()
    }

    async tearDown(page : Page, browser : Browser, context : BrowserContext ): Promise<void>{
        await page.close()
        await context.close()
        await browser.close()
    }

    async getPageTitle(page:Page): Promise<void>{
        const title = await page.title()
        console.log(`The title of the page is ${title}`);  

    }
    async timeout(page : Page): Promise<void>{
        await page.waitForTimeout(5000)

    }

    async runTest(){
        //destructuring objects from the setup method that is returning page. browser and context
        const {page,browser,context} = await this.setup()
        await this.navigate(page,'sathish@testleaf.com','Bullet@350')
        await this.timeout(page)
        await this.getPageTitle(page)
        await this.tearDown(page,browser,context)
    }

}

//creating instance for the class salesforcePage and calling runTest()
const salesforceObj = new salesforcePage()
salesforceObj.runTest()