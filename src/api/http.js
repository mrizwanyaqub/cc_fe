import createHttp from './httpFactory';

const httpOptions = {
  baseUrl: 'http://localhost:3500',
};

const HTTP = createHttp(httpOptions);

export default HTTP;
