import {chromium,test } from "@playwright/test";

test('Salesforce login', async() => {

    const browserInstance = await chromium.launch({headless: false, channel: "chrome"})
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://login.salesforce.com/")
    
});
