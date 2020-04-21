//String Functions
let firstname = "Vanshika"
let lastname = "Bhojnagarwala"

function print(fname,lname){
    let full = fname + " " + lname
    console.log("Full name : "+full.toUpperCase())

    let len = full.length
    console.log("Name length : "+len)
}

print(firstname,lastname)

//Menu Driven
let ch = 2
let day = "sunday"
switch(ch){
    case 1 :if(day === "saturday" || day === "sunday")
                console.log(day+" is a holiday")
             else
                console.log(day+"is a weekday")

            break;

    case 2 :for(let i=5;i<=100;i+=5)
                console.log(i)

            break;

    default :console.log("Wrong Input")
}
