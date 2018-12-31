let date = new Date("Mon Dec 31 2018 06:44:51 GMT-0500")
let hours = date.getHours()
let utcHours = date.getUTCHours()
let diffHours = date.getTimezoneOffset()/60
console.log(hours,utcHours,diffHours)
document.body.textContent = `${utcHours-diffHours}` // mi hora