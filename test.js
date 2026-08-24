const assert = require("assert");
const { greeting } = require("./app");

assert.strictEqual(
    greeting("Shubham"),
    "Hello Shubham! Your Jenkins Node.js application is running."
);

console.log("All tests passed successfully.");
