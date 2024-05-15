console.log(password);
var password = "Bullet@350"

console.log('the password length is '+password.charAt(password.length-3));

let browser = "chrome"

function launchBrowser()
{
    if(browser === "chrome")
    {
        console.log(`The broswer ${browser} is developed by google`);
    }
    else if(browser === "safari")
    {
        console.log(`The browser ${browser} is developed by apple`);
    }
    else
    console.log(`The browser ${browser} is unknown`);

}

launchBrowser()