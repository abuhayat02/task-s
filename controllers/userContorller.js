const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");


const ourUserContoler = async (req, res) => {
    try {
        let { name, email, password } = req.body;


        let myUser = await User.findOne({ email })

        if (!myUser) {

            let newUser = new User({
                name,
                email,
                password
            })
            let token = jwt.sign({ email }, process.env.SECRETE, { expiresIn: '6d' })



            await newUser.save()

            res.status(201).send({
                success: true,
                name,
                email,
                token
            })

        } else {
            let token = jwt.sign({ email }, process.env.SECRETE, { expiresIn: '6d' })
            res.status(201).send({
                success: true,
                name,
                email,
                token
            })
        }



    }
    catch (error) {
        res.status(401).send({
            success: false
        })
    }

}


let manageUsers = async (req, res) => {
    let quire = {};
    try {
        let users = await User.find(quire)
        res.status(201).send({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(401).send({
            success: false
        })
    }
}

module.exports = { ourUserContoler, manageUsers }













