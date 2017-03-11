var express =require('express');
var apiRoutes = express.Router();

var  appData=require("../data/data.json");
// http://localhost:3000/api/getstatus
apiRoutes.get('/getstatus', function (req, res) {
	res.json({
		code: 1,
		msg: "success",
		data: status
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