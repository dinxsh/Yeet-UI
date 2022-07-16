const express = require("express"); 
const path = require("path")
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, "../frontend/views")));

const MainRouter = require("../backend/routes/main")
const CompRouter = require("../backend/routes/components")
app.use("/", MainRouter)
app.use("/components", CompRouter)

app.listen(process.env.PORT, ()=> console.log("App Available now"));