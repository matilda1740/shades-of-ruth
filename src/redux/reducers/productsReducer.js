import { db, storage } from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, addDoc, getDoc, setDoc, deleteDoc, Timestamp } from "firebase/firestore"; 

export const initialState = {
  products: [],
  isLoading: false,
  error: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
        const { name, type} = action.payload
        try{
            const storageRef = ref(storage, `/products/${type}/${name}`);

            const uploadTask = uploadBytesResumable(storageRef, action.image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        addDoc(collection(db, "products"), action.payload)
                          .then(response => { 
                              setDoc(doc(db, "products", response.id), 
                              {...action.payload, 
                                id: response.id, 
                                image: url,
                                createdAt: Timestamp.now(),
                                updatedAt: Timestamp.now()
                              } , { merge:true })
                          }).catch(error => console.log(error))
                    });
                }
            );           

        }catch(error) { console.log("error adding product", error) }
      return {
        ...state,
      };   
    default:
      return state;
  }
};

export default productsReducer;