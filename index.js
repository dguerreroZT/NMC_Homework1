const http = require("http");
const url = require("url")
const port = 8000


const server = http.createServer((request, response) => {
	var parsedUrl = url.parse(request.url)
	var path = parsedUrl.pathname;
	path = path.replace(/^\/+|\/+$/g, '');

	switch(path){
		case "hello":{
			response.setHeader('Content-Type', 'application/json');
			response.writeHead(200);
			response.end(JSON.stringify({msg: `Hola `}));
			break;
		}
		default:{
			response.setHeader('Content-Type', 'application/json');
			response.writeHead(404);
			response.end(JSON.stringify({msg: "Adios"}));
			break;
		}
	}


})

server.listen(port, () => {console.log(`Server is running on port ${port}`)})