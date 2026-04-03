const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Easter API",
    description: "Egg API",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);