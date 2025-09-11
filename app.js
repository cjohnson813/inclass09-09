const http = require('http');

const myserver = http.createServer(function (req, res) {
	
	const url = require('url');
	console.log('Request URL:', req.url);
	console.log('Parsed query:', query);

	res.writeHead(200, {'Content-Type': 'text/html'});  //set content type
	res.write(`<html> <body> <p> Received </p> </body> </html>`);

	
	res.end(); //end response
	return;

});
const availableTimes = {  
    Monday: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
    Tuesday: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
    Wednesday: ["1:00", "1:30", "2:00", "2:30", "3:00", "4:00", "4:30"],
    Thursday: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
    Friday: ["1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
};
const appointments = [
    {name: "James", day: "Wednesday", time: "3:30" },
    {name: "Lillie", day: "Friday", time: "1:00" }];

myserver.listen(80);

