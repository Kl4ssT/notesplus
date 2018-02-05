import api from '../../../api';

export const getNotes = () => {
    return async (dispatch) => {
        try
        {
            dispatch({
                type: 'GET_NOTES'
            });

            const notes = await api.get('/notes');

            dispatch({
                type: 'GET_NOTES_SUCCESS',
                payload: notes.data
            })
        }
        catch (err)
        {
            dispatch({
                type: 'GET_NOTES_ERROR',
                payload: err.response.data.message
            });
        }
    }
};