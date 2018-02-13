import { combineReducers } from 'redux';

import {
    LoginReducer,
    NotesReducer,
    AddReducer,
    EditReducer
} from '../scenes';

import NavigationReducer from '../navigation/reducer';

export default combineReducers({
    login: LoginReducer,
    navigation: NavigationReducer,
    notes: NotesReducer,
    add: AddReducer,
    edit: EditReducer
});