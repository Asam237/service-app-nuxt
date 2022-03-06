const Announcement = require("../models/announcement")
const { verifyTokenAndAdmin } = require("./verifyToken")
const router = require("express").Router()

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newAnnouncement = new Announcement(req.body)
    try {
        const savedAnnouncement = await newAnnouncement.save()
        res.status(200).json(savedAnnouncement)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router