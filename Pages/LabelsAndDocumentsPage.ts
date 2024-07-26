import { Page,BrowserContext,expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";

export class LabelsAndDocumentsPage extends PlaywrightWrapper{

    constructor(page: Page,context: BrowserContext){
        super(page,context)
    }

    async gettingSuccessMessage(): Promise<void>{
        await this.getInnerText(`.success-heading`)

    }

    async gettingTrackingNo(): Promise<void>{
        await this.getInnerText(`.tracking-no`)

    }

    async gettingFromAddress(): Promise<void>{
        await this.getInnerText(`//div[@class='from-city-icon']/following::td[1]`)

    }

    async gettingToAddress(): Promise<void>{
        await this.getInnerText(`//div[@class='location-pin']/following::td[1]`)

    }

    async clickingViewAndPrintlabel(): Promise<void>{
        await this.clickButton(`//button[text()=' View And Print Label ']`,`View And Print Label`,`Button`)
        const labelPageTitle = await this.getPageTitle()
        expect(labelPageTitle,`Label Generated successfully!!`).toMatch("AOE11078174C.pdf")
    }

    async clickingViewReceipt(): Promise<void>{
        await this.clickButton(`//button[text()=' VIEW RECEIPT ']`,`View Receipt`,`Button`)
        const receiptPageTitile = await this.getPageTitle()
        expect(receiptPageTitile,`Receipt Generated successfully!!`).toMatch("Receipt")

    }

    async labelsAndDocumentsPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }
    

}