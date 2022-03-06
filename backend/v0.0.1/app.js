const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoutes = require("./routes/auth")
const categoriesRoute = require("./routes/categories")
const announcementsRoute = require("./routes/announcements")
const path = require("path")

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("[Database] : Connection successfull"))
    .catch(e => console.log(e))

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/auth", authRoutes)
app.use("/api/categories", categoriesRoute)
app.use("/api/announcements", announcementsRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("[BackEnd] : API running successfull")
})