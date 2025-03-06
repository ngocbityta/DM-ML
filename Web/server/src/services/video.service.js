const Video = require("../models/video.model");

/**
 * Tạo một video mới
 * @param {Object} videoData - Dữ liệu của video
 * @returns {Promise<Video>}
 */
const createVideo = async (videoData) => {
  return await Video.create(videoData);
};

/**
 * Lấy danh sách video
 * @param {Object} filter - Bộ lọc (tùy chọn)
 * @param {Object} options - Tùy chọn phân trang
 * @returns {Promise<Array<Video>>}
 */
const getVideos = async (filter = {}, options = {}) => {
  return await Video.find(filter).sort({ createdAt: -1 }).limit(options.limit || 10);
};

/**
 * Lấy thông tin một video theo ID
 * @param {String} videoId - ID của video
 * @returns {Promise<Video | null>}
 */
const getVideoById = async (videoId) => {
  return await Video.findById(videoId);
};

/**
 * Cập nhật video theo ID
 * @param {String} videoId - ID của video
 * @param {Object} updateData - Dữ liệu cập nhật
 * @returns {Promise<Video | null>}
 */
const updateVideo = async (videoId, updateData) => {
  return await Video.findByIdAndUpdate(videoId, updateData, { new: true });
};

/**
 * Xóa video theo ID
 * @param {String} videoId - ID của video
 * @returns {Promise<Video | null>}
 */
const deleteVideo = async (videoId) => {
  return await Video.findByIdAndDelete(videoId);
};

/**
 * Tăng lượt xem video
 * @param {String} videoId - ID của video
 * @returns {Promise<Video | null>}
 */
const incrementViews = async (videoId) => {
  return await Video.findByIdAndUpdate(videoId, { $inc: { views: 1 } }, { new: true });
};

/**
 * Tăng lượt thích video
 * @param {String} videoId - ID của video
 * @returns {Promise<Video | null>}
 */
const incrementLikes = async (videoId) => {
  return await Video.findByIdAndUpdate(videoId, { $inc: { likes: 1 } }, { new: true });
};

module.exports = {
  createVideo,
  getVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  incrementViews,
  incrementLikes,
};
