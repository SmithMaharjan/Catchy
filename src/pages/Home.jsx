import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { music } from '../apis/music'
import { logout } from '../apis/auth'
import AddMusicForm from '../component/AddMusicForm'
import { MusicContext } from '../context/musicState'

const Home = () => {
    const navigate = useNavigate()
    const { musicData, setMusicData } = useContext(MusicContext)
    // console.log(musicData, "musicdata")

    const [loggedInUser, setLoggedInUser] = useState("")
    const [userRole, setUserRole] = useState("")
    const [allMusics, setAllMusics] = useState([])
    const [userId, setUserId] = useState("")
    useEffect(() => {
        console.log(musicData, "music dataass");
    }, [musicData]);

    useEffect(() => {
        setLoggedInUser(localStorage.getItem("user"))
        setUserId(localStorage.getItem("id"))
        setUserRole(localStorage.getItem("role"))
        try {
            const getMusics = async () => {

                const response = await music();
                console.log(response.data.musics, "response");
                setAllMusics(response.data.musics)
                setMusicData((prev) => [...response.data.musics])
            }
            getMusics()

        }
        catch (error) {
            console.log(error)
        }
    }, [])

    const userLogout = async () => {
        console.log("hello")
        const response = await logout(userId)
        if (response) {
            console.log(response)
            localStorage.removeItem("token")
            navigate("/login")
        }
        else {
            console.log("something went wrong")
        }


    }


    return (
        <div>
            <AddMusicForm />
            <h1>hi {userRole}</h1>
            <button className=' bg-blue-500 px-4 py-2 rounded-2xl mb-2 text-white' onClick={userLogout}>Logout</button>
            <div className='w-full grid grid-cols-auto gap-6 gap-y-4 px-4 mb-5 '>{musicData.map((music) => (
                <div className='h-60 rounded-2xl border-blue-500 border-2 flex items-end justify-center'>
                    <p>{music.name}</p>

                </div>
            ))}</div>
            {userRole === "artist" ? <button onClick={() => navigate("/addMusic")} className=' bg-blue-500 p-2 text-white rounded-2xl'>add music</button> : ""}
        </div>

    )
}

export default Home