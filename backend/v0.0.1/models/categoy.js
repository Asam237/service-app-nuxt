const mongoose = require("mongoose")
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    announcements: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Announcement"
    }
})

module.exports = mongoose.model("Category", CategorySchema)