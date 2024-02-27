import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User from "../models/User.js"

const JWT_SECRET = 'sdjfhujasfhliarjoieurcainlerusekfhvisuinhurrrbfubyuistio4su9tus48sstvnthnsrufv89ru'

const postLoginController = async (req, res) => {
    var { email } = req.body
    const { password } = req.body

    email = email.toLowerCase()

    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.setHeader('Expires', '-1')
    res.setHeader('Pragma', 'no-cache')

    try {
        let user = await User.findOne({ email })

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {

                const token = jwt.sign(
                    {
                        id: user._id
                    },
                    JWT_SECRET
                )

                res
                    .status(200)
                    .cookie('token', token, {
                        httpOnly: true,
                        maxAge: 10 * 24 * 60 * 60 * 1000,
                        sameSite: 'none',
                        secure: true
                    })
                    .json({
                        status: 'Success',
                        message: 'Login Successful!'
                    })
            }
            else {
                res.status(400).json({ status: 'Error', error: 'Invalid Email/Password' })
            }
        }
        else {
            res.status(400).json({ status: 'Error', error: 'Invalid Email/Password' })
        }
    }
    catch (error) {
        res.status(500).json({ status: 'Error', error: error.message })
    }
}

const postRegisterController = async (req, res) => {
    const { email, password } = req.body

    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.setHeader('Expires', '-1')
    res.setHeader('Pragma', 'no-cache')

    try {
        let user = await User.findOne({ email })

        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10)

            user = await User.create({
                email: email,
                password: hashedPassword
            })

            res.status(201).json({ status: 'Success', message: 'Account created Successfully' })
        }
        else {
            res.status(400).json({ status: 'Error', error: 'Account already Exists' })

        }
    }
    catch (error) {
        res.status(500).json({ status: 'Error', error: error.message })
    }

}

const postGetUser = async (req, res) => {

    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.setHeader('Expires', '-1')
    res.setHeader('Pragma', 'no-cache')

    res.status(200).json({status: 'Success', data: req.user})

}

const postEmailAvailability = async (req, res) => {

    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.setHeader('Expires', '-1')
    res.setHeader('Pragma', 'no-cache')

    const { email } = req.body

    const user = await User.findOne({ email })

    if (user) {
        res.status(400).json({
            status: 'Error',
            message: 'Email Not Available!'
        })
    }
    else {
        res.status(200).json({
            status: 'Success',
            message: 'Email Available!'
        })
    }
}

const logoutController = (req, res) => {
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.setHeader('Expires', '-1')
    res.setHeader('Pragma', 'no-cache')

    res
        .cookie('token', null, {
            expires: new Date(Date.now()),
            sameSite: 'none',
            secure: true
        })
        .json({ status: 'Success', message: 'Logged Out Successfully!' })

}

export { postLoginController, postRegisterController, postGetUser, postEmailAvailability, logoutController }