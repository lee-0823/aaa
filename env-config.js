const debug = process.env.NODE_ENV !== 'production';
const repository = 'aaa';

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${repository}` : '',
};
