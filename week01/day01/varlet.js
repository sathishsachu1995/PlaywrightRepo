
const browserName = `chrome`

function getBrowserVersion()
{

    if(browserName===`chrome`)
    {
        let browserVersion = 24.6
        console.log(`The browser name is ${browserName}`);
    }
    else{
        console.log(`${browserName} is not a chrome`);
    }

    console.log(`The browser version is `+browserVersion);
}
getBrowserVersion()
console.log(browserVersion);
