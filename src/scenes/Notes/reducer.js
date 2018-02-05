const initialState = {
    error: null,
    isLoading: false,
    items: []
};

export default (state = initialState, action) => {
    switch (action.type)
    {
        case 'GET_NOTES':
            return { ...state, isLoading: true };
        case 'GET_NOTES_SUCCESS':
            return { ...state, isLoading: false, items: action.payload };
        case 'GET_NOTES_ERROR':
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}