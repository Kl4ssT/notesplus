import { combineReducers } from 'redux';

import {
    LoginReducer,
    NotesReducer
} from '../scenes';

import NavigationReducer from '../navigation/reducer';

export default combineReducers({
    login: LoginReducer,
    navigation: NavigationReducer,
    notes: NotesReducer
});