
function getNumber(enterNumber)
{
    switch (enterNumber) {
        case enterNumber>=0:
            return `The Given number`+enterNumber+` is positive`
        case enterNumber<0:
            return  `The Given number`+enterNumber+` is negative`  
    
        default:
            return `Enter valid number`
    }

}

let result = getNumber(2)

console.log(result);