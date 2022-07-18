const axios = require('axios').default;

const api = axios.create({
    baseURL: 'https://api.sampleapis.com/',

  });

  export default api