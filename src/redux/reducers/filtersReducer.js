const initialState = {
    products: [],
    appliedFilters: []
};


const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        // search function
        case 'FILTER_BY_VALUE':
            let filteredValues = [...state.products];
            let appliedFilters = [...state.appliedFilters];
            
            let index = appliedFilters.indexOf(action.payload)

            if(action.payload){
                index !== -1 && appliedFilters.push(action.type)

                filteredValues?.filter( products => {
                    return products.name.toLowerCase().includes(action.payload) || products.type.toLowerCase().includes(action.payload)
                })
            }else {
                appliedFilters.splice(index, 1)

                if(appliedFilters.length === 0) {
                    filteredValues = [...state.products]
                }

            }
            return {
                ...state,
                products: filteredValues,
                appliedFilters,
            };
        
        case 'SORT_BY_ALPHABET':
            const { direction, field } = action.payload;

            const sortAsc = (array, field) => array.sort((a, b) => a[field] - b[field]);

            const sortDesc = (array, field) => array.sort((a, b) => b[field] - a[field]);

            let sortedValues = direction === 'ASC' ? sortAsc([...state.products], field) : sortDesc([...state.products], field);

            return {
                ...state,
                products: sortedValues,
            };
        
        default:
            return state;
        }
};

export default filtersReducer;