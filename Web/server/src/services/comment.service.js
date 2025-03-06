const Comment = require("../models/comment.model");

/**
 * Tạo một bình luận mới
 * @param {Object} commentBody - Dữ liệu bình luận (userId, videoId, content)
 * @returns {Promise<Comment>}
 */
const createComment = async (commentBody) => {
  return Comment.create(commentBody);
};

/**
 * Lấy danh sách bình luận theo videoId
 * @param {string} videoId - ID của video
 * @returns {Promise<Comment[]>}
 */
const getCommentsByVideoId = async (videoId) => {
  return Comment.find({ videoId }).populate("userId", "name avatar").sort({ createdAt: -1 });
};

/**
 * Lấy bình luận theo ID
 * @param {string} commentId - ID của bình luận
 * @returns {Promise<Comment | null>}
 */
const getCommentById = async (commentId) => {
  return Comment.findById(commentId).populate("userId", "name avatar");
};

/**
 * Cập nhật nội dung bình luận
 * @param {string} commentId - ID của bình luận
 * @param {Object} updateBody - Dữ liệu cần cập nhật
 * @returns {Promise<Comment | null>}
 */
const updateComment = async (commentId, updateBody) => {
  return Comment.findByIdAndUpdate(commentId, updateBody, { new: true });
};

/**
 * Xóa bình luận
 * @param {string} commentId - ID của bình luận
 * @returns {Promise<Comment | null>}
 */
const deleteComment = async (commentId) => {
  return Comment.findByIdAndDelete(commentId);
};

module.exports = {
  createComment,
  getCommentsByVideoId,
  getCommentById,
  updateComment,
  deleteComment,
};
