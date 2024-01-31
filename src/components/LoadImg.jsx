import { useState, useEffect } from "react"
import {Loader} from './Loader/Loader'


export function LoadImg({ srcImage, altImage }) {

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {

        const cacheName = "astro-cache"

        async function getImage(url){
            const cache = await caches.open(cacheName)
            const response = await cache.match(url)
            if(response){
                const blob = await response.blob()
                const image = await createImageBitmap(blob)
                return image
            }
            return null
        }

        const image = getImage(srcImage)

        if(image) {
            setLoading(false)
            console.log("image loaded from astre cache");
        }else{
            const img = new Image()
            img.onload = () => {
                setLoading(false)
                console.log("image loaded from server");
            }
            img.src = srcImage
        }
    }, [srcImage])

    return(
        <>
            {loading && <Loader/>}
            {!loading && 
                <img
                    alt={altImage}  
                    loading="lazy"
                    src={srcImage}
                    height={256}
                    width={256}
                    className="mb-5 rounded-lg"
                />
            }
        </>
    )
}


