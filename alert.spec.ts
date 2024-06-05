import { test } from "@playwright/test";
import { log } from "console";

test('Alert handling',async({page})=>{

    page.on("dialog",async alert=>{
        await alert.accept()
        const type = alert.type()
        console.log(`The alert type is ${type}` );
        const alertMessage = alert.message()
        console.log(`The alert message is ${alertMessage}`);
        
    })

    await page.goto("https://leafground.com/alert.xhtml")
    const card = page.locator(".card").filter({hasText:" Alert (Simple Dialog)"})
    const submitButton = card.getByRole("button").filter({hasText:"Show"}).first()
    await submitButton.click()
    await page.waitForTimeout(3000)

})

test('Alert confirm dialogue',async({page})=>{

    page.on('dialog', async dialog=>{
        await dialog.dismiss()
        const typeOfAssert = dialog.type()
        console.log(`The type of alert is ${typeOfAssert}`);
        const message = dialog.message()
        console.log(`The message shown in the alert is ${message}`); 

    })

    await page.goto("https://leafground.com/alert.xhtml")
    const card = page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"})
    const clickButton = card.locator("//span[text()='Show']")
    await clickButton.click()
    const clicktButtonAction = await card.locator("#result").innerText()
    console.log(clicktButtonAction);
    await page.waitForTimeout(3000)

})

test('Sweet Alert',async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml")
    const card = page.locator(".card").filter({hasText:"Sweet Alert (Simple Dialog)"})
    const clickButton = card.locator("//span[text()='Show']")
    await clickButton.click()
    await page.waitForTimeout(3000)
    await page.locator("//span[text()='Dismiss']").click()

})

test.only("Prompt alert",async({page})=>{

    page.on("dialog",async dialog=>{
        await dialog.accept("Dilli babu")
        const message = dialog.message()
        console.log(`The alert message is ${message}`);
        const type = dialog.type()
        console.log(`${type} is type of alert`);
        
    })
    await page.goto("https://leafground.com/alert.xhtml")
    const card = page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"})
    const sumbitButton = card.locator("//span[text()='Show']")
    await sumbitButton.click()
    const result = await page.locator("#confirm_result").innerText()
    console.log(result);
    
    await page.waitForTimeout(3000)

})