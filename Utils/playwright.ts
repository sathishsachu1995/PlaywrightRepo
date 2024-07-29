import { test,Page,BrowserContext,expect } from "@playwright/test";
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
                await this.page.waitForSelector(locator,{state:'visible'})
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

    async clickAndType(locator:string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} clicked and filled with ${data} successfully!`,async () => {
                const element =  this.page.locator(locator)
                await element.click()
                await element.fill(data)
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking and entering data is ${error}`)
        }
    }

    async storage(path: string): Promise<void>{
        try {
            this.context.storageState({path})
            
        } catch (error) {
            
        }

    }

    async spin(locator: string){
        const spinner = this.page.locator(locator)
        await expect(spinner,'spinner loading completed').not.toBeVisible({timeout:60000})
    }

    async locatorChainingClick(dropDownName : string ,name: string,tagName: string):Promise<void>{
        try {
            test.step(`The ${dropDownName} ${name} is clicked successfully!`,async () => {
                this.page.getByRole('option',{name: name,exact:true}).locator(tagName).click()
                
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking the dropdown is ${error}`)
            
        }
        

    }

    async locatorWithFilter(locator: string,name :string ,text: string,type:string): Promise<void>{
        try {
            test.step(`The ${name} ${text} ${type} is clicked successfully!`,async () => {
                await this.page.locator(locator).filter({hasText:text}).click()
                
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking the ${type} is ${error}`)   
        }   

    }
    async locatingPopup(locator: string):Promise<boolean>{
        try {
            await this.page.waitForSelector(locator,{state:'visible'})
            const element = this.page.locator(locator).first()
            return true
            
        } catch (error) {
            console.error(`Error while locating an element: ${error}`)
            return false    
        }
        
    }

    async locatingElement(locator: string): Promise<void>{
        this.page.locator(locator)

    }

    async getErrorMessage(locator:string): Promise<void>{
        const errorMessage = await this.page.locator(locator).innerText()
        console.log(`The error message we are getting : ${errorMessage}`);
    }

    async getQuoteMessage(locator:string):Promise<void>{
        const quoteMessage = await this.page.locator(locator).first().innerText()
        console.log(`The rates we are getting : ${quoteMessage}`);
        
    }

    async getInnerText(locator: string): Promise<void>{
        const textMessage = await this.page.locator(locator).first().innerText()
        console.log(`The text we are getting : ${textMessage}`);
        
    }

    async getPageTitle(): Promise<string>{
        const currentPageTitile = await this.page.title()
        return currentPageTitile
    }

    async handlingMultiplePages(locator: string,title: string): Promise<void>{

        const pagePromise =  this.context.waitForEvent('page')
        await this.page.locator(locator).click()
        const newPage = await pagePromise
        await newPage.waitForLoadState('domcontentloaded')
        expect(newPage,`${title} have been created successfully!!`).toHaveTitle(title)
    }

    
}
