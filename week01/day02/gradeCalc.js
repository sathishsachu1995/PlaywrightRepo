
function studentsScore(mark)
{
    switch (true) {
        case mark>=90:
            return "Mark "+mark+" is A grade"
            
        case mark>=70&&mark<90:
            return "Mark "+mark+" is B grade"

        case mark>=55&&mark<70:
            return "Mark "+mark+" is C grade"

        case mark>=35&&mark<55:
            return "Mark "+mark+" is D grade"
    
        default:
            return "Mark "+mark+" is a Fail mark"

    }

}

let result = studentsScore(35)
console.log(result);