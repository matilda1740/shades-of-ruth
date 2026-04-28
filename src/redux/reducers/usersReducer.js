
// THIS REDUCER CONTAINS FUNCTIONS THAT DEAL WITH ALL USERS FROM FIRESTOR DATABASE AND SINGLE USER 

import { db } from '../../firebase'
import { collection, doc, addDoc, getDoc, setDoc, deleteDoc, Timestamp } from "firebase/firestore"; 

const INITIAL_STATE = {
    users: null,
    currentUser: null,
    
};

const getUserByUID = (state, action) => ({
    ...state,
    users: action.payload,
});

const getAllUsers = (state, action) => ({
    ...state,
    users: action.payload,
});

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case 'ADD_USER_PROFILE':
        const { name, type} = action.payload
        try{
            
            addDoc(collection(db, "users"), action.payload)
                .then(response => { 
                    setDoc(doc(db, "users", response.id), 
                    {...action.payload, 
                    createdAt: Timestamp.now(),
                    updatedAt: Timestamp.now()
                    } , { merge:true })
                }).catch(error => console.log(error))

        }catch(error) { console.log("error adding product", error) }
      return {
        ...state,
      };  
    case 'GET_ALL_USERS': {
        return getAllUsers(state, action);
    }
    case 'GET_USER_BY_UID': {
        return getUserByUID(state, action);
    }
    default:
        return state;
    }
}

export default userReducer;