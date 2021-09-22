import React, {createContext} from 'react'
import {storage} from '../firebase/Firebase'
import {ref, getDownloadURL} from 'firebase/storage'


export const myStorageContext = createContext({});
export const StorageContext = (props) => {

     const getStorageImage = async (filePath, setImage) => {
        try {
            console.log(filePath + " : Filepath")
            const myImageReference = ref(storage,filePath)
            console.log(myImageReference + '\n Storage Context Image Reference Path.')
            const imageUrl = await getDownloadURL(myImageReference)
            setImage(imageUrl)
        } catch (error) {
            console.log('Position: Storage Context\n Something with Image Fetching from Firebase storage went wrong')
        }
    }

    return (
        <myStorageContext.Provider value={getStorageImage}>
            {props.children}
        </myStorageContext.Provider>
    )
}

