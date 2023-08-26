"use client"
import Link from "next/link"
import React, { use } from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"  

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign Up</h1>
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
                    type="text"
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
            Register
            </button>
            <Link href="/login" className="text-blue-700">Log in</Link>
        </div>
    )
}