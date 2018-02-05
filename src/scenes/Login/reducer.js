const initialState = {
    isLogged: false,
    isLoading: false,
    token: null,
    error: {
        message: null,
        field: null
    }
};

export default (state = initialState, action) => {
    switch (action.type)
    {
        case 'LOGIN':
            return { ...state, isLoading: true, error: initialState.error };
        case 'LOGIN_SUCCESS':
            return { ...state, isLoading: false, isLogged: true, token: action.payload };
        case 'LOGIN_ERROR':
            return {
                ...state,
                isLoading: false,
                isLogged: false,
                token: null,
                error: {
                    message: action.payload.message,
                    field: action.payload.field
                }
            };
        default:
            return state;
    }
}