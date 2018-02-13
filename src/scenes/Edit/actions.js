import api from '../../../api';

export const getNote = (id) => {
    return async (dispatch) => {
        try
        {
            dispatch({ type: 'EDIT_LOADING' });

            const note = await api.get(`/notes/${id}`);

            dispatch({ type: 'NOTE_LOADED' });

            return note.data;
        }
        catch (err)
        {
            console.log(err);
        }
    };
};

export const editNote = (data) => {
    return async (dispatch) => {
        try
        {
            dispatch({ type: 'EDIT_LOADING' });

            const note = await api.put(`/notes/${data.id}`, data);

            dispatch({ type: 'EDIT_SUCCESS' });
        }
        catch (err)
        {
            console.warn(err);
            dispatch({
                type: 'EDIT_ERROR',
                payload: {
                    message: err.response.data.message,
                    field: err.response.data.field
                }
            });
        }
    };
};

export const deleteNote = (id) => {
    return async (dispatch) => {
        try
        {
            dispatch({ type: 'EDIT_LOADING' });

            const note = await api.delete(`/notes/${id}`);

            dispatch({ type: 'DELETE_SUCCESS' });
        }
        catch (err)
        {
            console.warn(err);
        }
    };
};