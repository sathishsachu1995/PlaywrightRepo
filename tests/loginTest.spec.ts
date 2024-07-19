import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { ExportDomesticPage } from "../Pages/ExportDomesticPage";
import loginData from "../Test-data/login.json";
import exportPage from "../Test-data/exportPageData.json";


test.setTimeout(60000)
test(`The testcase ID ${exportPage.testTitle}`,async ({page,context}) => {
    const login = new LoginPage(page,context)
    await login.preliveLogin(loginData.username,loginData.password)
    await page.waitForTimeout(3000)
    const exportShipment = new ExportDomesticPage(page,context)
    await exportShipment.deliveryAddress(exportPage.delCompany,exportPage.delContact,exportPage.delAddress1,exportPage.delCountry,exportPage.delState,exportPage.delCity,exportPage.delPostcode,exportPage.delDial,exportPage.delPhone,exportPage.delEmail,exportPage.carrier,exportPage.serviceType,exportPage.packageType,exportPage.customerReference,exportPage.testDescription,exportPage.transitInsurance,exportPage.weight,exportPage.length,exportPage.width,exportPage.height)
    await page.waitForTimeout(4000)
})
