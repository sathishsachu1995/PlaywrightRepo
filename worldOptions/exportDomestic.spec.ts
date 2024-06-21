import { expect, test } from "@playwright/test";
import  dotenv from "dotenv";
import path from "path";
import fs from "fs";

const environment = process.env.NODE_ENV || 'testing'
const envPath = path.resolve(__dirname, `../../test-data/${environment}.env`)
dotenv.config({path:envPath})

const exportDetails = JSON.parse(fs.readFileSync(path.join(__dirname, '../../test-data/exportDomestic.json'), 'utf-8'))

test.setTimeout(50000)
for(const exportTestData of exportDetails){

    test(`Test tile ${exportTestData.testTitle}`,async({page})=>{
     const url = process.env.WOA_URL as string
     const username = process.env.WOA_USERNAME as string
     const password = process.env.WOA_PASSWORD as string

     await page.goto(url)
     await page.getByPlaceholder("Enter username").fill(username)
     await page.getByPlaceholder("Enter password").fill(password)
     await page.getByText("Continue").click()
     const spinner = page.locator("//div[@class='la-ball-beat la-2x']")
     await expect(spinner,'spinner loading completed').not.toBeVisible({timeout:10000})
     await page.waitForTimeout(2000)
     await page.getByPlaceholder("Company").nth(1).fill(exportTestData.deliveryCompany)
     await page.getByPlaceholder("Contact Name").nth(1).fill(exportTestData.deliveryContactName)
     await page.getByPlaceholder("Address 1").nth(1).fill(exportTestData.deliveryAddress1)
     await page.getByPlaceholder("Select country").nth(1).click()
     await page.getByRole('option', { name: exportTestData.deliveryCountry }).locator('span').click()
     await page.getByPlaceholder("Select state").nth(1).click()
     await page.getByText(exportTestData.deliveryState).click()
     await page.getByPlaceholder("City").nth(1).fill(exportTestData.deliveryCity)
     await page.locator("[formcontrolname='PostalCode']").nth(1).fill(exportTestData.deliveryPostCode)
     await page.getByPlaceholder("Area").nth(1).fill(exportTestData.deliveryDialCode)
     await page.getByPlaceholder("Phone number").nth(1).fill(exportTestData.deliveryPhoneNumber)
     await page.getByPlaceholder("Email address").nth(1).fill(exportTestData.deliveryEmail)
     await page.getByPlaceholder("Select one").nth(0).click()
     await page.getByText(exportTestData.carrier,{exact:true}).click()
     await page.getByPlaceholder("Select one").nth(1).click()
     await page.getByRole('option', { name: exportTestData.serviceType }).locator('span').click()
     await page.getByPlaceholder("Select one").nth(2).click()
     await page.getByText(exportTestData.packageType).click()
     await page.getByPlaceholder("Enter Customer Reference ").fill(exportTestData.customerReference)
     await page.locator(".mat-radio-label-content").filter({hasText:"No"}).click()
     //await page.getByPlaceholder("ATL Description").fill("I need ATL")
     await page.getByPlaceholder("Unit").fill(exportTestData.weight)
     await page.getByPlaceholder("L",{exact:true}).fill(exportTestData.length)
     await page.getByPlaceholder("W",{exact:true}).fill(exportTestData.width)
     await page.getByPlaceholder("H",{exact:true}).fill(exportTestData.height)
     await page.getByRole('button', { name: 'Quote' }).click()
     await page.getByRole('button', { name: 'Ok' }).click()
     await page.getByRole("button",{name :'Next'}).click()
     const collection = page.locator("//p[text()='Drop at a Depot']/preceding::div[6]")
     await collection.click()
     await page.locator("//button[text()='Ship']").click()
})}
