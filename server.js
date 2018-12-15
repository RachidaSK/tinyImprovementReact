const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

}

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kudosDB", {
    useNewUrlParser: true
});


const db = mongoose.connection;
db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    console.log("Mongoose connection successful")
})

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> App is now listening on port : http://localhost:${PORT}`)
});