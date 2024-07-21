import { Page,BrowserContext, expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";
import { UrlConstants } from "../Constants/urlConstants";
export class ExportDomesticPage extends PlaywrightWrapper{

    static preliveExportUrl = UrlConstants.exportPageUrl

    constructor(page:Page, context: BrowserContext){
        super(page,context)
    }

    async deliveryAddress(deliveryCompany:string,deliveryContact:string,deliveryAddress1:string,deliveryCountry:string,deliveryState:string,deliveryCity:string,deliveryPostcode:string,deliveryDial:string,deliveryPhone:string,deliveryEmail:string,carrierName:string,serviceTypeName:string,packageTypeName:string,customerRef: string,description: string,insurance:string,unit:string,lengthCM:string,widthCM: string,heightCM:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Company'])[2]`,`DeliveryCompany`,deliveryCompany)
        await this.type(`(//input[@placeholder = 'Contact Name'])[2]`,`DeliveryContact`,deliveryContact)
        await this.type(`(//input[@placeholder = 'Address 1'])[2]`,`DeliveryAddress1`,deliveryAddress1)
        await this.clickButton(`(//mat-select[@placeholder = 'Select country'])[2]`,`DeliveryCountry`,`DropDown`)
        await this.locatorChainingClick('DeliveryCountry',deliveryCountry,'span')
        await this.clickButton(`(//mat-select[@placeholder= 'Select state'])[2]`,`DeliveryState`,`DropDown`)
        await this.locatorChainingClick('DeliveryState',deliveryState,'span')
        await this.type(`(//input[@placeholder = 'City'])[2]`,`DeliveryCity`,deliveryCity)
        await this.type(`(//input[@formcontrolname = 'PostalCode'])[2]`,`DeliveryPostcode`,deliveryPostcode)
        await this.type(`(//input[@placeholder = 'Area'])[2]`,`DeliveryDialcode`,deliveryDial)
        await this.type(`(//input[@placeholder = 'Phone number'])[2]`,`DeliveryPhone`,deliveryPhone)
        await this.type(`(//input[@placeholder = 'Email address'])[2]`,`DeliveryEmailAddress`,deliveryEmail)
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[1]`,`ServiceCompany`,`DropDown`)
        await this.locatorChainingClick(`ServiceCompany dropdown`,carrierName,`span`)
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[2]`,`ServiceType`,`DropDown`)
        await this.locatorChainingClick(`ServiceType dropdown`,serviceTypeName,`span`)
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[3]`,`PackageType`,`DropDown`)
        await this.locatorChainingClick(`PackageType dropdown`,packageTypeName,`span`)
        await this.type(`//input[@placeholder='Enter Customer Reference ']`,`CustomerReference`,customerRef)
        await this.type(`//textarea[@formcontrolname='Description']`,`TestDescription`,description)
        await this.locatorWithFilter(`.mat-radio-label-content`,insurance,`RadioButton`)
        await this.type(`//input[@placeholder='Unit']`,`Weight`,unit)
        await this.type(`//input[@placeholder='L']`,`Length`,lengthCM)
        await this.type(`//input[@placeholder='W']`,`Width`,widthCM)
        await this.type(`//input[@placeholder='H']`,`Height`,heightCM)
        await this.clickButton(`//button[text()='Quote']`,`Quote`,`Button`)
        await this.spin("//div[@class='la-ball-beat la-2x']")
        try {
            const quotePopup = await this.locatingPopup(`#quoteDialog`)
            if (quotePopup) {
                await this.getQuoteMessage(`.service-wrapper`)   
            } 
            else{
                await this.getErrorMessage(`#toast-container`)
    
            }    

        } catch (error) {
            console.error(`The error received while getting rates ${error}`)
            
        }  
        await this.clickButton(`//span[text()='Ok']`,`OkButton`,`Button`)
        await this.clickButton(`(//button[text()='Next'])[1]`,`NextButton`,`Button`)
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

}
