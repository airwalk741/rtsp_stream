const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/ws", {
      ws: true,
      changeOrigin: true,
      autoRewrite: true,
      secure: false,
      target: "wss://stream.airwalk.shop:8080",
    })
  );
};
