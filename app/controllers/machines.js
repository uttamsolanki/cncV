var request = require("request");

exports.sysInfo = function(req, res) {
	
	request.get("http://localhost:8001/api/v1/sysInfo",(error,response,body) => {
		if(error){
			return console.dir(error);
		}
		res.json((JSON.parse(body)));
	});
	
}

exports.statusInfo = function(req, res) {
	
	request.get("http://localhost:8001/api/v1/statusInfo",(error,response,body) => {
		if(error){
			return console.dir(error);
		}
		res.json((JSON.parse(body)));
	});
	
}

exports.programDir = function(req, res) {
	
	request.get("http://localhost:8001/api/v1/programDir",(error,response,body) => {
		if(error){
			return console.dir(error);
		}
		res.json((JSON.parse(body)));
	});
	
}

exports.alarmMsg = function(req, res) {
	
	request.get("http://localhost:8001/api/v1/alarmMsg",(error,response,body) => {
		if(error){
			return console.dir(error);
		}
		res.json((JSON.parse(body)));
	});
	
}
