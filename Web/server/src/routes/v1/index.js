const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const videoRoute = require("./video.route");
const commentRoute = require("./comment.route");
const userVideoRoute = require("./userVideo.route");
const docsRoute = require("./docs.route");
const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  { path: "/auth", route: authRoute },
  { path: "/users", route: userRoute },
  { path: "/videos", route: videoRoute },
  { path: "/comments", route: commentRoute },
  { path: "/user-video", route: userVideoRoute },
];

const devRoutes = [
  // routes chỉ có trong môi trường development
  { path: "/docs", route: docsRoute },
];

// Đăng ký default routes
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
