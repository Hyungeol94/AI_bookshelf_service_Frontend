// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  const SERVER = process.env.REACT_APP_DEV_ENV || "http://49.50.162.189:4000";
  const local = 'http://localhost:4000/'
  console.log("백엔드서버:", SERVER);

  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/auth",
    createProxyMiddleware({
      target: local, //SERVER,
      changeOrigin: true,
    })
  );
  app.use(
    "/user",
    createProxyMiddleware({
      target: local, //SERVER,
      changeOrigin: true,
    })
  );
  app.use(
    "/book",
    createProxyMiddleware({
      target: "https://search.shopping.naver.com",
      changeOrigin: true,
    })
  );
};
