"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"  

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Log in</h1>
            <hr/>
           <div className="flex flex-col items-start justify-center">
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
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-blue-700"
           >
            Log in
            </button>
            <Link href="/signup" className="text-blue-700">Sign up</Link>
        </div>
    )
}