import React, { useContext, useEffect } from 'react'
import { AlbumContext } from '../context/AlbumState'
import { getAlbums } from '../apis/album'
import { Navigate, useNavigate } from 'react-router-dom'

const AlbumCards = () => {
    const { albums, setAlbums } = useContext(AlbumContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(albums, "albumAAyo")
    }, [albums])
    useEffect(() => {
        const getAllAlbums = async () => {
            try {
                const repsonse = await getAlbums()


                setAlbums(() => [...repsonse.data.albums])


            }
            catch (error) {
                console.log(error)

            }
        }
        getAllAlbums()



    }, [])
    return (
        <div>{albums.map((album, index) => (
            <p onClick={() => navigate(`/singleAlbum`, { state: album })} key={index}>{album.name}</p>
        )
        )}</div>
    )
}

export default AlbumCards