import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/www.googleapis.com/youtube/v3?part=snippet'
})