const initialState = {
    isLoading: false,
    isAdded: false,
    error: {
        message: null,
        field: null
    }
};

export default (state = initialState, action) => {
    switch (action.type)
    {
        case 'ADD_LOADING':
            return { ...state, isLoading: true, error: initialState.error };
        case 'ADD_SUCCESS':
            return { ...state, isLoading: false, isAdded: true };
        case 'ADD_ERROR':
            return {
                ...state,
                isLoading: false,
                isAdded: false,
                error: {
                    message: action.payload.message,
                    field: action.payload.field
                }
            };
        default:
            return state;
    }
}