// creating LoginPage class for to login to the prelive WOA customer portal

import { Page,BrowserContext, expect  } from "@playwright/test";  // importing page and browser context fixture from playwright/test module

export class LoginPage{  // creating class called login page
    private page: Page  // creating page property as private and return type is Page
    private context: BrowserContext  // creating context property as private and return type is BrowserContext

    constructor(page:Page,context:BrowserContext){  /* creating constructor for LoginPage and passing page and context property as a argument. 
                                                       when we call this constructor while creating object for this LoginPage class, page and context will be passed inside constructor
                                                       from there this constructor will initialize values to the page and context property of this current LoginPage class */

        this.page = page  /* this keyword refers to current class and current class page property = page property which is passed as an argument inside constructor.
                            Here initialization is done for the current class page property */

        this.context = context  /* Current class context property = context property which is passed as an argument inside constructor.
                                   Here initialization is done for the current class context property */
    }

    // For this method value's will be implementing from JSON file
    async preliveLogin(url: string,username: string, password: string): Promise<void>{  // Creating preliveLogin aysnc function and passing url ,username and password as an argument
        await this.page.goto(url)  // Using current class page to use page method -> goto(url) and it will return promise so we should use await keyword to resolve promise
        
        const loginID = this.page.getByPlaceholder("Enter username") // using getByPlaceholder method for to find username element
        await loginID.fill(username)  // Using fill method to fill value to the username field
        await expect(loginID,`Username text field is available to fill username ${username}`).toBeEnabled() // using Assertion to check whether username element is enabled or editable

        const loginPassword = this.page.getByPlaceholder("Enter password")  // using getByPlaceholder method for to find password element
        await loginPassword.fill(password)  // Using fill method to fill value to the password field
        await expect(loginPassword,`Password text field is available to fill password ${password}`).toBeEnabled() // using Assertion to check whether password element is enabled or editable

        const loginButton = this.page.getByText("Continue")  // using getByText method for to find continue button
        await loginButton.click()  // Using click method to click the button
        await expect(loginButton,`Continue button is available to click the Continue button`).toBeEnabled() // using Assertion to check whether click button is enabled or clickable

    }
}