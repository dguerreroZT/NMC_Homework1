let md_Server = function(options = {}){

	const http = require("http");
	const url = require("url")
	const StringDecoder = require('string_decoder').StringDecoder;
	const port = options.port || 8000

	this.methods = {
		POST:"POST",
		GET:"GET"
	}

	// Handler that retrurns a Message with status 404
	function defaultHandler(response){
		response.setHeader('Content-Type', 'application/json');
		response.writeHead(404);
		response.end(JSON.stringify({msg: "not found"}));
	}

// Create the server
const server = http.createServer((request, response) => {
	// Get the path
	let parsedUrl = url.parse(request.url)
	let path = parsedUrl.pathname;
	path = path.replace(/^\/+|\/+$/g, '');
	path = path.toLowerCase()

	// Get the metehod
	let method = request.method;

	// Get the query
	let queryObject = path.query

	



	// Evaluate the path and method
	// and returns the message with status 200
	if(method === this.methods.POST && path === "hello"){
		sayHello(response)
		return 
	}

	// if path or method does not match the conditions
	// return the message with status 404
	sayGoodBye(response)

})


export(server)
// Start the server
server.listen(port, () => {console.log(`Server is running on port ${port}`)})

}