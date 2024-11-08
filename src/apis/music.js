import axios from "axios"
import { baseUrl } from "../config/config"

export const music = async () => {
    const music = await axios.get(`${baseUrl}/getAllMusics`)
    return music
}


export const addMusic = async (data) => {
    console.log(data, "music datas response")
    const music = await axios({
        url: `${baseUrl}/addMusic`,
        method: "POST",
        data: data
    })
    console.log(music, "a music")
    return music
}


export const userMusic = async (data) => {
    const music = await axios({
        url: `${baseUrl}/Musics`,
        method: "POST",
        data: data
    })
    return music
}