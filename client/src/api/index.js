import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPost = () => axios.get(`${URL}/posts`);