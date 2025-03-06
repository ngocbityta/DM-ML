const express = require("express");
const commentController = require("../../controllers/comment.controller");

const router = express.Router();

// Tạo bình luận mới
router.post("/", commentController.createComment);

// Lấy danh sách bình luận của một video
router.get("/video/:videoId", commentController.getCommentsByVideoId);

// Lấy chi tiết một bình luận
router.get("/:commentId", commentController.getCommentById);

// Cập nhật bình luận
router.patch("/:commentId", commentController.updateComment);

// Xóa bình luận
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
