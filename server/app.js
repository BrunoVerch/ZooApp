var http = require("http");
var models = require("./app/models");

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

console.log('server');
models.sequelize.sync().then(function () {
  server.listen(80, function(){
  	console.log(models.User);
  	console.log('server rodando');
  });
});