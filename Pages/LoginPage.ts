// creating LoginPage class for to login to the prelive WOA customer portal

import { Page,BrowserContext, expect  } from "@playwright/test";  // importing page and browser context fixture from playwright/test module
import { PlaywrightWrapper } from "../Utils/playwright";  // importing PlaywrightWrapper class from the Utils folder
import { UrlConstants } from "../Constants/urlConstants"; // importing Enum name -->UrlConstants from the Constants folder

export class LoginPage extends PlaywrightWrapper{  // creating class called login page which is extending base class called PlaywrightWrapper to use those methods

    static preliveLoginUrl = UrlConstants.loginPageUrl // calling Enum string loginPageUrl and store it in a static variable so that we can call this loginPageUrl with class name LoginPage

    constructor(page:Page,context:BrowserContext){ // Creating constructor for the curren class and passing page and context as a argument.. while creating object for this LoginPage class page and context value will be initialized
        super(page,context)  /* Calling parent class constructor using Super() keyword to ovveride its properties while creating object for LoginPage we have to pass Page and Context argument value and 
                                it will go to parent class constructor and page,context will be initialized and those page and context will be passed to this current LoginPage class */

    }

    // For this method value's will be implementing from JSON file
    async preliveLogin(username: string, password: string): Promise<void>{  // Creating preliveLogin aysnc function and passing username and password as an argument
       await this.loadAppUrl(LoginPage.preliveLoginUrl)  // Calling loadAppUrl method from the WrapperClass PlaywrightWrapper to load the prelive login Url we have to use 'this' keyword while calling methods from wrapper class this means current class
       await this.type("[placeholder='Enter username']","Username",username)  // Calling type method from the WrapperClass PlaywrightWrapper to enter username in the username field. Inside method we have to pass 'locator', 'name' of the element and 'value'
       await this.type("[placeholder='Enter password']","Password",password)  // Calling type method from the WrapperClass PlaywrightWrapper to enter password in the password field. Inside method we have to pass 'locator', 'name' of the element and 'value'
       await this.clickButton('text= Continue',"Continue","Button")  // Calling clickButton method from the WrapperClass PlaywrightWrapper to click the login button. Inside method we have to pass 'locator', 'name' of the button and 'type' of the button
    }
}
