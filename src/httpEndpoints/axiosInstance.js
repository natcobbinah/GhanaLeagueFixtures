import axios from 'axios';

const sportdatapiInstance = axios.create({
    baseURL: 'https://app.sportdataapi.com/api/v1',
})

export {sportdatapiInstance };
