const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const commentService = require("../services/comment.service");

/**
 * Tạo một bình luận mới
 * @route POST /comments
 */
const createComment = catchAsync(async (req, res) => {
  const comment = await commentService.createComment(req.body);
  res.status(httpStatus.CREATED).json(comment);
});

/**
 * Lấy danh sách bình luận của một video
 * @route GET /comments/video/:videoId
 */
const getCommentsByVideoId = catchAsync(async (req, res) => {
  const comments = await commentService.getCommentsByVideoId(req.params.videoId);
  res.status(httpStatus.OK).json(comments);
});

/**
 * Lấy thông tin một bình luận
 * @route GET /comments/:commentId
 */
const getCommentById = catchAsync(async (req, res) => {
  const comment = await commentService.getCommentById(req.params.commentId);
  if (!comment) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "Bình luận không tồn tại" });
  }
  res.status(httpStatus.OK).json(comment);
});

/**
 * Cập nhật bình luận
 * @route PATCH /comments/:commentId
 */
const updateComment = catchAsync(async (req, res) => {
  const comment = await commentService.updateComment(req.params.commentId, req.body);
  if (!comment) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "Bình luận không tồn tại" });
  }
  res.status(httpStatus.OK).json(comment);
});

/**
 * Xóa bình luận
 * @route DELETE /comments/:commentId
 */
const deleteComment = catchAsync(async (req, res) => {
  const comment = await commentService.deleteComment(req.params.commentId);
  if (!comment) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "Bình luận không tồn tại" });
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createComment,
  getCommentsByVideoId,
  getCommentById,
  updateComment,
  deleteComment,
};
