import axios from "axios"
import { baseUrl } from "../config/config.js"
import { toast } from "react-toastify"

export const register = async (data) => {
    try {
        const response = await axios({
            url: `${baseUrl}/register`,
            method: "POST",
            data: data
        })
        console.log(response)
    }
    catch (error) {
        console.log(error, "error")
    }
}

export const login = async (data) => {
    const response = await axios({
        url: `${baseUrl}/login`,
        method: 'POST',
        data: data
    })
    if (response.data.message) {
        return response
    }
    else {
        alert("error")
    }
}

export const logout = async (data) => {
    console.log(data)
    const response = await axios({
        url: `${baseUrl}/logout`,
        method: "DELETE",
        data: {
            id: data
        }
    })
    if (response.data.message) {
        return response
    }
    else {
        alert("error")
    }

}
