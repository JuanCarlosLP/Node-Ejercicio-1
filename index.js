let http = require("http");
let fs = require("fs");

http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.url === "/contacto") {
      fs.readFile("./contact.html", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
      });
    } else if (request.url === "/proyectos") {
      fs.readFile("./projects.html", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
      });
    } else if (request.url === "/nosotros") {
      fs.readFile("./about.html", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
      });
    } else if (request.url === "/") {
      fs.readFile("./index.html", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
      });
    } else if (request.url === "/favicon.ico") {
      fs.readFile("./favicon.ico", (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
      });
    }
    else {
      response.write("<h1>404</h1>");
      response.end();
    }
}).listen(8080);
