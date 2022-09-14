const mongoose = require("mongoose");
const username = "-";
const password = "-";

mongoose.connect(
    `mongodb+srv://${username}:${password}@firsttestclustertr.sxjrx.mongodb.net/node-api`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (!error) console.log("Mongodb connected");
        else console.log("Connection error :" + error);
    }
)
