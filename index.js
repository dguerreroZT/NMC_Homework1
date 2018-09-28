const http = require("http");
const url = require("url")
const port = 8000

// Handler that retrurns a Message with status 200 
function sayHello(response){
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(200);
	response.end(JSON.stringify({msg: `Hola `}));
}

// Handler that retrurns a Message with status 404
function sayGoodBye(response){
	response.setHeader('Content-Type', 'application/json');
	response.writeHead(404);
	response.end(JSON.stringify({msg: "Adios"}));
}

// Create the server
const server = http.createServer((request, response) => {
	// Get the path
	let parsedUrl = url.parse(request.url)
	let path = parsedUrl.pathname;
	path = path.replace(/^\/+|\/+$/g, '');
	path = path.toLowerCase()

	// Get the metehod
	let method = request.method

	// Evaluate the path and method
	// and returns the message with status 200
	if(method === "POST" && path === "hello"){
		sayHello(response)
		return 
	}

	// if path or method does not match the conditions
	// return the message with status 404
	sayGoodBye(response)

})

// Start the server
server.listen(port, () => {console.log(`Server is running on port ${port}`)})