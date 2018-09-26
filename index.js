const http = require("http");
const url = require("url")
const port = 8000


function sayHello(response){
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(200);
	response.end(JSON.stringify({msg: `Hola `}));
}

function sayGoodBye(response){
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(404);
	response.end(JSON.stringify({msg: "Adios"}));
}

const server = http.createServer((request, response) => {
	var parsedUrl = url.parse(request.url)
	var path = parsedUrl.pathname;
	path = path.replace(/^\/+|\/+$/g, '');
	path = path.toLowerCase()

	if(request.method === "POST" && path === "hello"){
		sayHello(response)
		return 
	}

	sayGoodBye(response)

})

server.listen(port, () => {console.log(`Server is running on port ${port}`)})