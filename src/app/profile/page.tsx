"use client"
import React from "react"
import axios from "axios"
import Link from "next/link"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = React.useState("nothing")
    
    const onLogout = async () => {
        try {
            axios.get('/api/users/logout')
            toast.success("Logout successful")
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2
                className="p-3 rounded bg-green-500"
            >{data === "nothing" ? 'Nothing' : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={onLogout}
            >Logout</button>
            <button
                className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={getUserDetails}
            >Get user details</button>
        </div>
    )
}