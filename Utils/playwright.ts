import { test,Page,BrowserContext, Locator } from "@playwright/test";
import path from "path";

export abstract class PlaywrightWrapper{
    readonly page: Page
    readonly context: BrowserContext

    constructor(page:Page,context:BrowserContext){
        this.page = page
        this.context = context
    }

    async loadAppUrl(url:string): Promise<void>{
        try {
           await test.step(`The URL ${url} loaded successfully!`, async () => {
                await this.page.goto(url)
            })
            
        } catch (error) {
            console.error(`The error message received when loading url is ${error}`)
            
        }   
    }

    async type(locator: string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`, async () => {
                await this.page.locator(locator).fill(data)
                
            })
            
        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`)    
        }
    }

    async clearAndType(locator:string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`,async () => {
                const element =  this.page.locator(locator)
                await element.clear()
                await element.fill(data)
            })
            
        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`)
        }
    }

    async typeAndEnter(locator: string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`,async () => {
                await this.page.locator(locator).fill(data)
                await this.page.keyboard.press('Enter')
                
            })
            
        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`)    
        }

    }

    async clickButton(locator: string, name: string, type: string): Promise<void>{
        try {
            await test.step(`The ${name} ${type} is clicked successfully!`, async () => {
                await this.page.locator(locator).click()
                
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking ${name} is ${error}`)    
        }

    }

    async forceClick(locator: string, name: string, type: string): Promise<void>{
        try {
            await test.step(`The ${name} ${type} is clicked successfully!`, async () => {
                await this.page.waitForSelector(locator,{state:"attached"})
                await this.page.locator(locator).click({force:true})
                
            })
            
        } catch (error) {

            console.error(`The Error message received when force clicking ${name} is ${error}`)    
        }

    }

    async storage(path: string): Promise<void>{
        try {
            this.context.storageState({path})
            
        } catch (error) {
            
        }

    }
}
