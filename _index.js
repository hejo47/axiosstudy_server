const http = require("http");
const hostname = "127.0.0.1";
const port = "8080";
const server = http.createServer((request, response) => {
  const path = request.url;
  const method = request.method;
  if (path === "/products") {
    if (method === "GET") {
      response.writeHead(200, { "Content-type": "application/json" });
      const products = JSON.stringify([
        {
          name: "썬칩",
          price: 3000,
          imgUrl: "https://sitem.ssgcdn.com/50/09/87/item/1000030870950_i1_1200.jpg",
        },
      ]);
      response.end(products);
    } else if (method === POST) {
      response.end("생성되었습니다!");
    }
  }
  response.end("Good Bye");
});
server.listen(port, hostname);
console.log("server on");
