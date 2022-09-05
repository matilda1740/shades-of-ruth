import {useState, useEffect} from 'react'
import { db, storage }from "../firebase"

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { collection, getDocs, onSnapshot, doc, addDoc, getDoc, setDoc, deleteDoc, Timestamp } from "firebase/firestore"; 

export const useFirestoreGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const array = [];
    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, url));

            querySnapshot.forEach((doc) => {
                array.push(doc.data());
            });
        }catch(error){
            console.log("Error Getting Products")
        }
        return array
    }
    useEffect(() => {
        getData()
        .then(response => setData(response))
        .catch(error => setError(error))
        .finally(() => setLoaded(true))
    }, []);

    return { data, error, loaded };
}
export const useFirestoreNewData = (type, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const postData = async () => {
        await addDoc(collection(db, type), payload)
            .then(response => { 
                setDoc(doc(db, type, response.id), {...payload, id: response.id} , { merge:true })
            }).catch(error => console.log(error))
    }
    useEffect(() => {
        postData()
        .then(response => setData("Success"))
        .catch(error => setError(error))
        .finally(() => setLoaded(true))
    }, []);

    return { data, error, loaded }    
}

export const useFirestoreUpdateData = (type, id, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const updateData = async () => await setDoc(doc(db, type, id), payload, { merge:true }).catch(error => console.log(error))

    useEffect(() => {
        updateData()
        .then(response => setData("Success"))
        .catch(error => setError(error))
        .finally(() => setLoaded(true))
    }, []);

    return { data, error, loaded }    
}

export const useFirestoreGetById = (type, id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const getDataById = async () => {
        const docSnap = await getDoc(doc(db, type, id)).catch(error => console.log(error))
        return docSnap.data();
    }
    useEffect(() => {
        getDataById()
        .then(response => setData(response))
        .catch(error => setError(error))
        .finally(() => setLoaded(true))
    }, []);

    return { data, error, loaded }    
}

export const useFirebaseStorageGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const getData = async () => {
        const imageURL = await getDownloadURL(ref(storage, url)).catch(error => console.log(error))            
        return imageURL;
    }
    useEffect(() => {
        getData()
        .then(response => setData(response))
        .catch(error => setError(error))
        .finally(() => setLoaded(true))
    }, []);

    return { data, error, loaded };
}

