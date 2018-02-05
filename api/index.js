import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://31.31.203.89:2253'
});

AsyncStorage.getItem('token')
    .then(token => instance.defaults.headers.common['Authorization'] = token);

export default instance;