const express = require("express");
const authRouter = require("./routes/auth-route");
const userRouter = require("./routes/user-route");
const restaurantRouter = require("./routes/restaurant-route");
const handleError = require("./middlewares/error")
const cors = require("cors")
const notFound = require('./middlewares/notFound')

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use(handleError)
app.use("/*",notFound)

app.listen(8000, () => console.log("Server is running on port 8000"));
