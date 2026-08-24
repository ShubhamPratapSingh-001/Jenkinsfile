const http = require("http");
const { greeting } = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
        return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${greeting("Shubham")}</h1><p>Jenkins build is successful.</p>`);
});

server.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`);
});
