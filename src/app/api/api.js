import axios from 'axios';

export default axios.create({
  baseURL: `https://api-stg.bliink.io/v1/`
});

const END_POINTS = {
  AUTH: 'user/auth',
  UPDATE_PROFILE: 'users/{id}',
};

export { END_POINTS };

export const URL_GETTER = {
  /**
   * Get api endPoint with params
   * @param {String} endPoint
   * @param {Object} params
   * @return {String}
   */
  get: (endPoint, params) => {
    if (endPoint in END_POINTS) {
      let apiEndPoint = END_POINTS[endPoint];
      if (params && params.constructor === Object) {
        Object.keys(params).forEach(key => {
          if (params[key] !== null) {
            const currParam = `{${key}}`;
            if (apiEndPoint.indexOf(currParam)) {
              apiEndPoint = apiEndPoint.replace(currParam, params[key])
            }
          }
        });
      }
      return apiEndPoint;
    }
    return null;
  }
};
