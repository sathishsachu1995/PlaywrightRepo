import { Page,BrowserContext, expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";
import { UrlConstants } from "../Constants/urlConstants";

export class ExportDomesticPage extends PlaywrightWrapper{

    static preliveExportUrl = UrlConstants.exportPageUrl

    constructor(page:Page, context: BrowserContext){
        super(page,context)
    }

    async enteringDeliveryCompanyName(deliveryCompany:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Company'])[2]`,`Delivery Company`,deliveryCompany)
    }

    async enteringDeliveryContactName(deliveryContact:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Contact Name'])[2]`,`Delivery Contact`,deliveryContact)
    }

    async enteringDeliveryAddress1(deliveryAddress1:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Address 1'])[2]`,`Delivery Address1`,deliveryAddress1)
    }

    async clickingDeliveryCountry(deliveryCountry:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder = 'Select country'])[2]`,`Delivery Country`,`Drop Down`)
        await this.locatorChainingClick('Delivery Country',deliveryCountry,'span')
    }

    async clickingDeliveryState(deliveryState:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder= 'Select state'])[2]`,`Delivery State`,`Drop Down`)
        await this.locatorChainingClick('Delivery State',deliveryState,'span')
    }

    async enteringDeliveryCity(deliveryCity:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'City'])[2]`,`Delivery City`,deliveryCity)
    }

    async enteringDeliveryPostcode(deliveryPostcode:string): Promise<void>{
        await this.type(`(//input[@formcontrolname = 'PostalCode'])[2]`,`Delivery Postcode`,deliveryPostcode)
    }

    async enteringDeliveryDial(deliveryDial:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Area'])[2]`,`Delivery Dialcode`,deliveryDial)
    }

    async enteringDeliveryPhone(deliveryPhone:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Phone number'])[2]`,`Delivery Phone`,deliveryPhone)
    }

    async enteringDeliveryEmailID(deliveryEmail:string): Promise<void>{
        await this.type(`(//input[@placeholder = 'Email address'])[2]`,`Delivery Email Address`,deliveryEmail)
    }

    async clickingServiceCompany(carrierName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[1]`,`Service Company`,`Drop Down`)
        await this.locatorChainingClick(`Service Company Drop Down`,carrierName,`span`)
    }

    async clickingServiceType(serviceTypeName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[2]`,`Service Type`,`Drop Down`)
        await this.locatorChainingClick(`Service Type Drop Down`,serviceTypeName,`span`)
    }

    async clickingPackageType(packageTypeName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[3]`,`Package Type`,`Drop Down`)
        await this.locatorChainingClick(`Package Type Drop Down`,packageTypeName,`span`)
    }

    async enteringCustomerRef(customerRef: string): Promise<void>{
        await this.type(`//input[@placeholder='Enter Customer Reference ']`,`Customer Reference`,customerRef)
    }

    async enteringTestDescription(description: string): Promise<void>{
        await this.type(`//textarea[@formcontrolname='Description']`,`Test Description`,description)
    }

    async clickingTransitInsurance(insurance:string): Promise<void>{
        await this.locatorWithFilter(`.mat-radio-label-content`,`Transit Insurance`,insurance,`RadioButton`)
    }

    async enteringWeight(unit:string): Promise<void>{
        await this.type(`//input[@placeholder='Unit']`,`Weight`,unit)
    }

    async enteringLength(lengthCM:string): Promise<void>{
        await this.type(`//input[@placeholder='L']`,`Length`,lengthCM)
    }

    async enteringWidth(widthCM: string): Promise<void>{
        await this.type(`//input[@placeholder='W']`,`Width`,widthCM)
    }

    async enteringHeight(heightCM:string): Promise<void>{
        await this.type(`//input[@placeholder='H']`,`Height`,heightCM)
    }

    async clickingQuoteButton(): Promise<void>{
        await this.clickButton(`//button[text()='Quote']`,`Quote`,`Button`)
    }

    async exportPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async gettingRatesOrErrorMessage(): Promise<void>{
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

    }

    async clickingOKButton(): Promise<void>{
        await this.clickButton(`//span[text()='Ok']`,`Ok Button`,`Button`)
    }

    async clickingNextButton(): Promise<void>{
        await this.clickButton(`(//button[text()='Next'])[1]`,`Next Button`,`Button`)
    }
    

}
