const express = require('express');
const https = require('https');
const bodyparser = require('body-parser')
const cors=require('cors')

const app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
//app.use(cors({origin: "https://localhost:5000"}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

/*app.get('/',(req,res)=>{
   const city="Goa";
const apikey = '93ac6756e213cf9a8350b85251a0cd3e';
const url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric';
https.get(url,(response)=>{
    console.log(response);
    response.on('data',(d)=>{
    const weatherdata = JSON.parse(d);
    const desc = weatherdata.weather[0].description;
        console.log(desc);
       // res.write("<h1>Temprature in "+weatherdata.name+ " is "+weatherdata.main.temp+ " degree celcius</h1>")       // res.write("<p>"+desc+"</p>")
       res.json(weatherdata)
      // res.send(weatherdata)
      // res.write("hello")
    })
})
}) */

app.post('/',(req,res)=>{
    const {city}= req.body.name;
  // const city="Goa";
  console.log(req.body.name);
const apikey = '93ac6756e213cf9a8350b85251a0cd3e';

const url='https://api.openweathermap.org/data/2.5/weather?q='+req.body.name+'&appid='+apikey+'&units=metric';
https.get(url,(response)=>{
    //console.log(response);
    response.on('data',(d)=>{
  const weatherdata = JSON.parse(d);
 const desc = weatherdata.weather[0].description;
        console.log(desc);
       
       
       res.json(weatherdata)
      // res.send(weatherdata)
      
    })
})
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})