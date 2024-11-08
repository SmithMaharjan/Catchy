import { createContext, useState } from "react";

export const AlbumContext = createContext()
const AlbumContextProvider = ({ children }) => {
    const [albums, setAlbums] = useState([{
        name: "",
        user: "",
        musics: [{
            name: ""
        }]
    }])
    // const [musics, setMusics] = useState([])
    const value = {
        albums, setAlbums
    }


    return (
        <AlbumContext.Provider value={value}>
            {children}
        </AlbumContext.Provider>
    )
}
export default AlbumContextProvider