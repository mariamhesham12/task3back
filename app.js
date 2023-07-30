const request =require("request")
const forecast=require("./weatherData.js/forecast")
const geocode = require("./weatherData.js/geocode")

const country = process.argv[2]
geocode(country, (error, data) =>{
    console.log("ERROR : " ,error)
    console.log("DATA : " ,data)
    if(data){

    forecast(data.lat , data.lon , (error, data) => {
    console.log("ERROR : " ,error)
    console.log("DATA : " ,data)
})
} else{
    console.log("THERE IS A PROBLEM IN THE DATA")
}
})