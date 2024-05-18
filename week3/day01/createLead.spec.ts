import { chromium,test } from "@playwright/test";

test('create a lead', async () => {
    let browserInstance = await chromium.launch()
    let browserContext = await browserInstance.newContext()
    let page = await browserContext.newPage()
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.getByText("CRM/SFA").click()
    await page.getByRole("link",{name:'Leads'}).click()
    await page.getByRole("link",{name:"Create Lead"}).click()
    await page.locator("#createLeadForm_companyName").fill("Test leaf")
    await page.locator("#createLeadForm_firstName").fill("Sathish")
    await page.locator("#createLeadForm_lastName").fill("Radhakrishnan")
    await page.locator('[name = submitButton]').click()
    let status = await page.locator("#viewLead_statusId_sp").innerText()
    console.log(`The status of creating lead is ${status}`); 
    
})
