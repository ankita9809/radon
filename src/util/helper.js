const date = new Date()
const printDate = function(){
    const todayDate = date.getDate()
    console.log("Todays Date is: " +todayDate +"-06-2022")
}

const month = new Date()
const printMonth = function(){
    const todayMonth = month.getMonth()
    console.log("Todays Month is: "+todayMonth +"(JUNE)") // Output - 5 , as it is printing Jan as 0 by default
}

const getBatchInfo = function(){
    console.log("Radon, W3D1, the topic for today is Nodejs module system")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo