var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "testFiles/";

http.createServer(function(req,res) {
var urlObj = url.parse(req.url,true,false);
if(urlObj.pathname.indexOf('getcity') != -1){
	console.log("In REST Service");
}//new route
else{

}	
	fs.readFile(ROOT_DIR + urlObj.pathname, function(err,data){
		if(err){
			res.writeHead(404);
      			res.end(JSON.stringify(err));
      			return;
    		}
    	res.writeHead(200);
   	res.end(data);
  });
}).listen(8080);

//not needed V
/*var options = {
	hostname: 'localhost',
	port: '80',
	path: '/hello.html'
};

function handleResponse(response){
	var serverData = '';
	response.on('data',function (chunk){
		serverData += chunk;
	});
	response.on('end',funtion(){
		console.log(serverData);
	});
}
http.request(options, function(response){
	handleResponse(response);
}).end();
*/
