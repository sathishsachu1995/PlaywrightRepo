import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { ExportDomesticPage } from "../Pages/ExportDomesticPage";
import { CollectionOptionPage } from "../Pages/CollectionOptionPage";
import { LabelsAndDocumentsPage } from "../Pages/LabelsAndDocumentsPage";
import loginData from "../Test-data/login.json";
import exportPage from "../Test-data/exportPageData.json";


test.setTimeout(60000)
test(`The testcase ID ${exportPage.testTitle}`,async ({page,context}) => {
    const login = new LoginPage(page,context)
    await login.loadingURL()
    await login.enteringUsername(loginData.username)
    await login.enteringPassword(loginData.password)
    await login.clickingContinueButton()
    await login.loginPageSpinner()
    await page.waitForTimeout(3000)
    const exportDomestic = new ExportDomesticPage(page,context)
    await exportDomestic.enteringDeliveryCompanyName(exportPage.delCompany)
    await exportDomestic.enteringDeliveryContactName(exportPage.delContact)
    await exportDomestic.enteringDeliveryAddress1(exportPage.delAddress1)
    await exportDomestic.clickingDeliveryCountry(exportPage.delCountry)
    await exportDomestic.clickingDeliveryState(exportPage.delState)
    await exportDomestic.enteringDeliveryCity(exportPage.delCity)
    await exportDomestic.enteringDeliveryPostcode(exportPage.delPostcode)
    await exportDomestic.enteringDeliveryDial(exportPage.delDial)
    await exportDomestic.enteringDeliveryPhone(exportPage.delPhone)
    await exportDomestic.enteringDeliveryEmailID(exportPage.delEmail)
    await exportDomestic.clickingServiceCompany(exportPage.carrier)
    await exportDomestic.clickingServiceType(exportPage.serviceType)
    await exportDomestic.clickingPackageType(exportPage.packageType)
    await exportDomestic.enteringCustomerRef(exportPage.customerReference)
    await exportDomestic.enteringTestDescription(exportPage.testDescription)
    await exportDomestic.clickingTransitInsurance(exportPage.transitInsurance)
    await exportDomestic.enteringWeight(exportPage.weight)
    await exportDomestic.enteringLength(exportPage.length)
    await exportDomestic.enteringWidth(exportPage.width)
    await exportDomestic.enteringHeight(exportPage.height)
    await exportDomestic.clickingQuoteButton()
    await exportDomestic.exportPageSpinner()
    await exportDomestic.gettingRatesOrErrorMessage()
    await exportDomestic.clickingOKButton()
    await exportDomestic.clickingNextButton()
    await exportDomestic.exportPageSpinner()
    const collectionOption = new CollectionOptionPage(page,context)
    await collectionOption.clickingDropAtDepot()
    //await collectionOption.clickingScheduleACollection(exportPage.date,exportPage.parcelFrom,exportPage.closePickup,exportPage.pickupLoc,exportPage.locationDesc)
    await collectionOption.clickingShipButton()
    await collectionOption.collectionPageSpinner()
    await page.waitForTimeout(3000)
    const lablesAndShippingDocs = new LabelsAndDocumentsPage(page,context)
    await lablesAndShippingDocs.gettingSuccessMessage()
    await lablesAndShippingDocs.gettingTrackingNo()
    await lablesAndShippingDocs.gettingFromAddress()
    await lablesAndShippingDocs.gettingToAddress()
    //await lablesAndShippingDocs.clickingViewAndPrintlabel()
    await lablesAndShippingDocs.clickingViewReceipt()
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner() 
    await page.waitForTimeout(4000)
})
