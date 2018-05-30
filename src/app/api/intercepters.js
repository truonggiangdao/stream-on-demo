const registerIntercepters = (axios) => {
  axios.interceptors.request.use(config => {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      }
      return newConfig;
    }
    return config;
  });
}

export default registerIntercepters;