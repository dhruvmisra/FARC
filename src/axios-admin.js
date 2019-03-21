import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://farc-2ec77.firebaseio.com/'
});

export default instance;