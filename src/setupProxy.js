// src/setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  const LOCAL_SERVER_ENV = process.env.REACT_APP_LOCAL_SERVER_ENV; // 백 앤드 개발환경

  const SERVER = LOCAL_SERVER_ENV || process.env.REACT_APP_SERVER_ENV;

  console.log("백엔드서버:", SERVER);

  app.use(
    "/v1",

    createProxyMiddleware({
      target: process.env.REACT_APP_NAVER_BOOK_API,

      changeOrigin: true,
    })
  );

  app.use(
    "/auth",

    createProxyMiddleware({
      target: SERVER,

      changeOrigin: true,
    })
  );

  app.use(
    "/user",

    createProxyMiddleware({
      target: SERVER,

      changeOrigin: true,
    })
  );

  app.use(
    "/book",

    createProxyMiddleware({
      target: process.env.REACT_APP_NAVER_BOOK_SHOOPING,

      changeOrigin: true,
    })
  );
};
