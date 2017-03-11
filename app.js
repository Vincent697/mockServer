// require express modules
var express = require('express');
var domian="http://static.ciweishixi.dev:"

// create a instance of express object
var app = express();

var apiRoutes = express.Router();

var  appData=require("./data/data.json");

// Express Routers
// http://localhost:3000/api/getstatus
apiRoutes.get('/getstatus', function (req, res) {
	res.json({
		code: 1,
		msg: "success",
		data: appData.goods
	});
});


apiRoutes.get('/goods', function (req, res) {
	res.json({
		code: 1,
		msg: "success",
		data: status
	});
});

apiRoutes.get('/ratings', function (req, res) {
	res.json({
		code: 1,
		msg: "success",
		data: status
	});
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/api', apiRoutes);

// define 

app.get('/',function(req,res){
	res.send('Please use a correct api url');
});

app.listen(3333, function () {
  console.log('app is listening at port 3333\n');
  console.log('Please input \"'+domian+'3333\" in your broswer.');
});