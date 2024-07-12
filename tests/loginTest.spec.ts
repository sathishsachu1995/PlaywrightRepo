import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import loginData from "../Test-data/login.json";

test('Login WOA prelive portal by using framework',async ({page,context}) => {
    const login = new LoginPage(page,context)
    await login.preliveLogin(loginData.url, loginData.username,loginData.password)
    await page.waitForTimeout(3000)
    
})