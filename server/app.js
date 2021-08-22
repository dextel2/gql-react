const express = require("express");
const graphQLHTTP = require("express-graphql").graphqlHTTP;
const app = express();
const port = 4000 || process.env.PORT;
const schema = require("./schema/schema");
const logger = require("./helpers/logger");
const mongoose = require("mongoose");
require("dotenv").config();

// Process Error
process.on("uncaughtException", (err) => {
    console.log(err.name, err.message);

    logger.log({
        level: "error",
        message: `${err.name} : ${err.message}`,
    });

    process.exit(1);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// Mongoose Error
process.on("unhandledRejection", (err) => {
    console.log(err.name, err.message);

    logger.log({
        level: "error",
        message: `${err.name} : ${err.message}`,
    });

    mongoose.close(() => {
        process.exit(1);
    });
});
mongoose.connection.once("open", () => {
    console.log("db connected");
});
// Endpoint
app.use("/graphql", graphQLHTTP({ schema, graphiql: true }));

app.listen(port, () => console.log(`Server running on port ${port}`));
