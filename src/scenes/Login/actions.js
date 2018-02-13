import { AsyncStorage } from 'react-native';
import api from '../../../api';

export const checkAuth = () => {
    return async (dispatch) => {

        dispatch({
            type: 'LOGIN'
        });

        const token = await AsyncStorage.getItem('token');

        if (token)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: token
            });
        else
            dispatch({
                type: 'NOT_LOGIN'
            })
    }
};

export const authUser = (login, password, isSignUp = false) => {
    return async (dispatch) => {
        try
        {
            dispatch({
                type: 'LOGIN'
            });

            const token = await api.post(isSignUp ? '/auth/register' : '/auth/login', { login, password });
            await AsyncStorage.setItem('token', token.data);

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: token.data
            });
        }
        catch (err)
        {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: {
                    message: err.response.data.message,
                    field: err.response.data.field
                }
            });
        }
    }
};