const express = require('express');
const request = require('request');
const axios = require('axios');

const app = express();


app.listen(3001, ()=>console.log('Server is running'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 


app.get('/weather', (req,res)=>{

    
    let city =  req.query.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0dd59407f7d9c09d6533231884fb23ff`;
    let data = {}





    
     request( {url,json:true},async (err,{body})=>{
       //console.log(body);
       data = {
            City:body.name,
            Country:body.sys.country,
            weatherDesc: body.weather[0].main,
            temp : (body.main.temp -273.15), //32°F − 32) × 5/9
            icon : body.weather[0].icon,
            windspeed : body.wind.speed,
            pressure : body.main.pressure,
            humidity : body.main.humidity
            
            
       }; 
       
      await res.send(data);
    
    });

    //   url.then(response=>{
    //     //console.log(response.data)
    //     data = {
    //         City:response.data.name,
    //         Country:response.data.sys.country,
    //         weatherDesc: response.data.weather[0].main,
    //         temp : (response.data.main.temp -273.15), //32°F − 32) × 5/9
    //         icon : response.data.weather[0].icon
            
    //    };
    //    res.send(data);
    //   }).catch(error=>{
    //       console.log(error);
    //   })
      
     

       
   
    
})




   

        


    

