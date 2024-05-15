
function launchBrowser(browserName)
{
    if (browserName ==="chrome") 
    {
        console.log(`chrome browser is going to launch`);  
    } 
    else 
    {
        console.log(`Other browser is going to launch`);  
    }

}

function runTests(testType)
{
    switch (testType) {
        case "regression":   
            console.log("we are going to test existing functionlities");
            break

        case "sanity":
            console.log("we are going to test affected functionlities");
            break
    
        default:
            console.log("we are going to test critical functionalities");
    }

}

launchBrowser("chrome")
runTests("regression")