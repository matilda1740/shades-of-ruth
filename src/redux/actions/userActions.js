// USER ACTION CREATORS

// CORE ACTIONS
export const addUser = (payload) => {
    return { 
        type: 'CREATE_USER',
        payload
    }
}

export const updateUser = (payload) => {
    return { 
        type: 'UPDATE_USER',
        payload
    }
}

export const deleteUser = (id) => {
    return { 
        type: 'DELETE_USER',
        id
    }
}

// ADDITIONAL ACTIONS
export const selectUser = (payload) => {
    return { 
        type: 'SELECT_USER',
        payload
    }
}