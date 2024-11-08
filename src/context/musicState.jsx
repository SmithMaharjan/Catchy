import { createContext, useState } from "react";

export const MusicContext = createContext()
const MusicContextProvider = ({ children }) => {
    const [musicData, setMusicData] = useState([])

    const value = {
        musicData, setMusicData
    }


    return (
        <MusicContext.Provider value={value}>
            {children}
        </MusicContext.Provider>
    )
}
export default MusicContextProvider