import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cb0007e49a6b903ff8b217d425ba88039bc2d672dc297b70c58c383eec1340c2'
    }
});