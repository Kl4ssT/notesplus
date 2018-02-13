const initialState = {
    isLoading: false,
    isDeleted: false,
    note: {},
    error: {
        message: null,
        field: null
    }
};

export default (state = initialState, action) => {
    switch (action.type)
    {
        case 'EDIT_LOADING':
            return { ...state, isLoading: true, error: initialState.error };
        case 'NOTE_LOADED':
            return { ...state, isLoading: false };
        case 'EDIT_SUCCESS':
            return { ...state, isLoading: false, isEdited: true };
        case 'DELETE_SUCCESS':
            return { ...state, isDeleted: true };
        case 'EDIT_ERROR':
            return {
                ...state,
                isLoading: false,
                isEdited: false,
                error: {
                    message: action.payload.message,
                    field: action.payload.field
                }
            };
        default:
            return state;
    }
}