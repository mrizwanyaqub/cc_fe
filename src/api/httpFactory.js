const NO_CONTENT = 204;

const handleSuccessBranch = response => {
  if (response.status === NO_CONTENT) {
    return Promise.resolve();
  }

  return response.status >= 200 && response.status < 300
    ? response.json().then(json => json.data)
    : response.json().then(json => {
        const errors = json.message.map(message => ({
              message,
              statusCode: response.statusCode,
            }));
        return Promise.reject(errors);
      });
};

const createHttp = (options = { withDeserializer: true }) => {
  const headers = () => {
    let res = {};
    try {
      res = {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      };
      // res.Authorization = `Bearer  ${authToken}`;
    } catch (e) {
      // empty
    }
    return { ...res, ...options.headers };
  };

  const fetchUrl = async (method, url, payload) => {
    try {
      const response = await fetch(url, {
        method,
        headers: headers(),
        body: JSON.stringify(payload),
      });
      return await handleSuccessBranch(response);
    } catch (err) {
      throw err;
    }
  };

  const get = url => {
    return fetchUrl('get', `${options.baseUrl}/${url}`);
  };

  const post = (url, payload) => {
    return fetchUrl('post', `${options.baseUrl}/${url}`, payload);
  };

  const put = (url, payload) => {
    return fetchUrl('put', `${options.baseUrl}/${url}`, payload);
  };

  const patch = (url, payload) => {
    return fetchUrl('patch', `${options.baseUrl}/${url}`, payload);
  };

  const del = url => {
    return fetchUrl('del', `${options.baseUrl}/${url}`);
  };

  return {
    get,
    post,
    put,
    del,
    patch,
  };
};

export default createHttp;
