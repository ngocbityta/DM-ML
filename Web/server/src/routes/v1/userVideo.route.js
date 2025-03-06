const express = require("express");
const userVideoController = require("../../controllers/userVideo.controller");

const router = express.Router();

// Tạo bản ghi UserVideo mới
router.post("/", userVideoController.createUserVideo);

// Lấy danh sách UserVideo
router.get("/", userVideoController.getUserVideos);

// Lấy chi tiết UserVideo theo ID
router.get("/:id", userVideoController.getUserVideoById);

// Cập nhật UserVideo theo ID
router.patch("/:id", userVideoController.updateUserVideo);

// Xóa UserVideo theo ID
router.delete("/:id", userVideoController.deleteUserVideo);

// Tăng lượt xem video
router.post("/watch", userVideoController.incrementWatchCount);

// Cập nhật trạng thái Like, Share, Collection
router.post("/status", userVideoController.updateVideoStatus);

module.exports = router;
