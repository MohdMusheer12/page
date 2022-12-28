const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const fs = require("fs");
const https = require("https");
const http = require("http");
const router = express.Router();


app.use("view engine","hbs");

const options = {
	"method": "GET",
	"hostname": "weatherapi-com.p.rapidapi.com",
	"port": null,
	"path": "/future.json?q=London&dt=2022-12-25",
	"headers": {
		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		"useQueryString": true
	}
};

app.get("/" , (req,resp) => {
    https.get(url, (res) => {
        let body = "";
        res.on("data",(chunk)=>{
            body +=chunk;
        });

        res.on("end",()=>{
            try{

                let api_data = JSON.parse(body);
                console.log(api_data);
            }
            catch(err){
                console.log(err);
            }
        }).on("error",(err)=>{
            console.error(err);
        });
    })
})



// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();

app.listen(2120,()=>{
    console.log("hello")
})