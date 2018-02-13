import api from '../../../api';

export const addNote = (data) => {
    return async (dispatch) => {
        try
        {
            dispatch({ type: 'ADD_LOADING' });

            const newNote = await api.post('/notes', data);
            dispatch({
                type: 'ADD_SUCCESS'
            });

            dispatch({
                type: 'ADD_NOTE',
                payload: newNote.data
            })
        }
        catch (err)
        {
            dispatch({
                type: 'ADD_ERROR',
                payload: {
                    message: err.response.data.message,
                    field: err.response.data.field
                }
            })
        }
    };
};