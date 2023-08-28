"use client"
import Link from "next/link"
import React, { use } from "react"
import { useRouter } from "next/navigation"
import axios from "axios" 
import { Toaster, toast } from "react-hot-toast" 

export default function SignupPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    //console.log(user)

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log("Signup success:", response.data)
            router.push("/login")
            toast.success("Signed up successfully")
        } catch (error: any) {
            console.log("Sign up failed:", error.message)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        if (user.email.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Sign Up"}</h1>
            <hr/>
           <div className="flex flex-col items-start justify-center">
           <div className="flex flex-row items-center justify-between w-[100%]">
                <label htmlFor="username" className="mb-4">Username:</label>
                <input 
                    className="ml-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="Username"
                />
            </div>

            <div className="flex flex-row items-center justify-between w-[100%]">
                <label htmlFor="email" className="mb-4">Email:</label>
                <input 
                    className="ml-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="Email"
                />
            </div>

            <div className="flex flex-row items-center justify-between w-[100%]">
                <label htmlFor="password" className="mb-4">Password:</label>
                <input 
                    className="ml-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="Password"
                />
            </div>
           </div>
           <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-blue-700"
           >
            {buttonDisabled ? "Fill the fields" : "Register"}
            </button>
            <Link href="/login" className="text-blue-700">Log in</Link>
        </div>
    )
}