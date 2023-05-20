import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { writeUserData } from './utils'

import imageCompression from 'browser-image-compression';

const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
async function uploadIMG(ruteDB, ruteSTG, fileName, file, setUserSuccess, monthAndYear) {
    const imagesRef = ref(storage, `/${ruteSTG}/${fileName}`);

    let newRuteDB = `/${ruteDB}/${fileName}`
    const options = {
        maxWidthOrHeight: 500,
        maxSizeMB: 0.07,
        alwaysKeepResolution: true,
        useWebWorker: true,
        maxIteration: 300,
        fileType: 'image/webp'
    }

    const compressedFile = file.type != 'image/gif' ? await imageCompression(file, options) : file

    uploadBytes(imagesRef, compressedFile).then(async (snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath))
            .then((url) => {
                let obj = {
                    url,
                }
 
                return writeUserData(newRuteDB, obj)
            })
            .catch((error) => {
            });
    });
}

let object = {}
// function downloadIMG(pathReference, postsIMG, setUserPostsIMG) {
//     const fileName = pathReference["_location"]["path_"]
//     // console.log(fileName)
//     getDownloadURL(pathReference)
//         .then((url) => {
//             object = { ...object, [fileName]: url }
//             setUserPostsIMG({ ...postsIMG, ...object })
//         })
//         .catch((error) => {
//         });
// }

// function getIndexStorage(rute, database, postsIMG, setUserPostsIMG) {
//     Object.keys(database).map((i) => {
//         const pathReference = ref(storage, `/${rute}/${i}`);
//         downloadIMG(pathReference, postsIMG, setUserPostsIMG)
//     });
// }

export { uploadIMG }