const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = require("express").Router()

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        fullName: req.body.fullName,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin: true,
        picture: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    })
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/login", async (req, res) => {
    const secret = process.env.SECRET
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if (!username) {
            res.status(401).json("The username not found")
        }
        if (username && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({
                userId: user.id,
                isAdmin: user.isAdmin
            },
                secret,
                { expiresIn: "3d" }
            )
            res.status(200).json({
                username: user.name,
                email: user.email,
                fullName: user.fullName,
                token: token
            })
        } else {
            res.status(400).json("Wrong password")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
