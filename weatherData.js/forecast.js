const request =require("request")

const forecast =(lat , lon, callback) => {
const forecastURL = 'https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q='+ lat + " , " + lon

request({url :forecastURL , json :true} , (error , response)=>{
    if (error){
        callback("AN ERROR HAS ACCURED", undefined)
    }
    else if(response.body.error){
        callback(response.body.error.message, undefined)
    }
    else{
        callback(undefined,"Weather: " + response.body.current.condition.text + " / Temperature: "+ response.body.current.temp_c)
    }
})
}
module.exports= forecast