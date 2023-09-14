import axios from 'axios';

export const baseURL = 'http://127.0.0.1:5000'

const instance = axios.create({
  baseURL
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export const getData = (endpoint) => {
  return instance.get(endpoint)
    .then(response => {
        const data = response.data ;
        data['status'] = response.status ;
        return data ;
    })
    .catch(error => {
      if(error.response) {
        console.error(error);
        return {...error.response.data,'status':error.response.status}
      }
      throw error;
    });
};

export const postData = (endpoint, data,headers) => {
  return instance.post(endpoint, data,headers)
    .then(response => {
        const data = response.data ;
        data['status'] = response.status ;
        return data;
    })
    .catch(error => {
      console.log(error.response,'dsfsd')
      if(error.response) {
        return {...error.response.data,'status':error.response.status}
      }
      throw error;
    });
};
