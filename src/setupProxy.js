const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://eu-west-2.aws.data.mongodb-api.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/app/data-vghcq/endpoint/data/v1/action/findOne'
      }
    })
  );
};
