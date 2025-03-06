const express = require("express");
const videoController = require("../../controllers/video.controller");

const router = express.Router();

// Tạo video mới
router.post("/", videoController.createVideo);

// Lấy danh sách video
router.get("/", videoController.getVideos);

// Lấy chi tiết video theo ID
router.get("/:videoId", videoController.getVideoById);

// Cập nhật video theo ID
router.patch("/:videoId", videoController.updateVideo);

// Xóa video theo ID
router.delete("/:videoId", videoController.deleteVideo);

// Tăng lượt xem video
router.post("/:videoId/views", videoController.incrementViews);

// Tăng lượt thích video
router.post("/:videoId/likes", videoController.incrementLikes);

module.exports = router;
