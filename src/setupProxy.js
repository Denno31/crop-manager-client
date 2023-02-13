const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://crop-manager-api.onrender.com",
      changeOrigin: true,
    })
  );
};
