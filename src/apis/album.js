import axios from "axios"
import { baseUrl } from "../config/config"
export const getAlbums = async () => {
    const response = await axios.get(`${baseUrl}/allAlbums`)
    return response
}
export const addAlbum = async (data) => {
    const response = await axios({
        url: `${baseUrl}/addMusicInAlbum`,
        method: "POST",
        data: data
    })
    return response
}




export const testing = async () => {

    const response = await axios({
        url: `${baseUrl}/allAlbums`,
        method: "GET",
        headers: {
            "Authorization": `Bearer token12`,
        },
    });
    console.log(response, "tesssssssting")


}
testing()