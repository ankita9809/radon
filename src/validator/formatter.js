const trim = function(){
    const x = "    Ankita Kumari          "
    console.log(x.trim())
   }
   
const changetoLowerCase = function(){
     const y = "AnkitaKumari"
     console.log(y.toLocaleLowerCase())
   }
const changeToUpperCase = function(){
    const z = "AnkitaKumari"
    console.log(z.toLocaleUpperCase())
   }


module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase