import React, { useEffect, useState } from 'react'
import { baseUrl } from '../config/config.js'
import musical_cat from "../assets/img/musical_cat.jpg"
import { register } from '../apis/auth'
import axios from 'axios'

const Signup = () => {
    const [allRoles, setAllRoles] = useState([])

    const [formState, setFormState] = useState({
        email: "",
        password: "",
        role: ""
    })
    const handleRoles = (e) => {
        setFormState((prevState) => ({ ...prevState, role: e.target.value }));
        console.log("Selected role:", e.target.value);  // This will show the selected role immediately.
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await register(formState)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const getRoles = await axios.get(`${baseUrl}/getAllRoles`)
                setAllRoles(getRoles.data.roles)

            }
            catch (error) {
                console.log(error)

            }

        }
        fetchRoles()


    }, [])
    return (
        <div className=' flex flex-col md:flex-row h-screen '>
            <div className='md:w-1/2 relative'>
                <div className="hidden md:block md:absolute md:w-1/3 text-[38px] font-Rubik text-[#82e9ec] p-6  -right-10 top-[40%] transform -translate-y-1/2 z-50">
                    Join Now!
                </div>

                <img className='hidden md:block md:absolute  top-0 object-cover h-full w-full' src={musical_cat} />
            </div>
            <div className='w-1/2 flex justify-center items-center'>

                <form onSubmit={handleSubmit}>
                    <h1 className=' text-3xl font-bold mb-4'>Sign<span className='text-blue-500'>Up</span></h1>
                    <div className=' flex flex-col gap-5'>
                        <label className='relative cursor-auto'>
                            <input onChange={(e) => setFormState({ ...formState, email: e.target.value })} value={formState.email} className=' rounded-lg border-black transition-all duration-200 h-11  px-3 border-2 outline-none opacity-55 focus:border-blue-500 focus:opacity-100' type='email' />
                            <span className='absolute  top-2 left-0 mx-4  input-text transition-all duration-200'>Email</span>

                        </label>
                        <label className='relative '>
                            <input onChange={(e) => setFormState({ ...formState, password: e.target.value })} value={formState.password} className='rounded-lg border-black transition-all duration-200 h-11  px-3 border-2 outline-none opacity-55 focus:border-blue-500 focus:opacity-100' type='password' />
                            <span className='  absolute  top-2 left-0 mx-4  input-text transition-all duration-200'>Password</span>

                        </label>
                        <label>Role</label>
                        <select onChange={handleRoles} value={formState.role}>
                            {allRoles.map((role) => (
                                <option value={role.name}>{role.name}</option>

                            ))}
                        </select>
                        <button type='submit' className=' block px-2 py-4 bg-blue-500 text-white rounded-3xl'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup