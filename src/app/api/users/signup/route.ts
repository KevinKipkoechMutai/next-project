import { connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody
        //console.log(reqBody)
        //console.log(reqBody.email)

        // Check if user exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //create new user
        const newUser = new User({
            username: username, 
            email: email, 
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({message: "User created successfully", success: true, savedUser})


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}