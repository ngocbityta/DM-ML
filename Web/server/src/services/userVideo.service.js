const UserVideo = require("../models/userVideo.model");

/**
 * Tạo một bản ghi UserVideo mới
 * @param {Object} data - Dữ liệu liên kết user-video
 * @returns {Promise<UserVideo>}
 */
const createUserVideo = async (data) => {
  return await UserVideo.create(data);
};

/**
 * Lấy danh sách UserVideo
 * @param {Object} filter - Bộ lọc (tùy chọn)
 * @param {Object} options - Tùy chọn phân trang
 * @returns {Promise<Array<UserVideo>>}
 */
const getUserVideos = async (filter = {}, options = {}) => {
  return await UserVideo.find(filter)
    .populate("userId", "name email") // Lấy thông tin user
    .populate("videoId", "title url") // Lấy thông tin video
    .limit(options.limit || 10);
};

/**
 * Lấy thông tin UserVideo theo ID
 * @param {String} userVideoId - ID của UserVideo
 * @returns {Promise<UserVideo | null>}
 */
const getUserVideoById = async (userVideoId) => {
  return await UserVideo.findById(userVideoId)
    .populate("userId", "name email")
    .populate("videoId", "title url");
};

/**
 * Cập nhật UserVideo theo ID
 * @param {String} userVideoId - ID của UserVideo
 * @param {Object} updateData - Dữ liệu cập nhật
 * @returns {Promise<UserVideo | null>}
 */
const updateUserVideo = async (userVideoId, updateData) => {
  return await UserVideo.findByIdAndUpdate(userVideoId, updateData, { new: true });
};

/**
 * Xóa UserVideo theo ID
 * @param {String} userVideoId - ID của UserVideo
 * @returns {Promise<UserVideo | null>}
 */
const deleteUserVideo = async (userVideoId) => {
  return await UserVideo.findByIdAndDelete(userVideoId);
};

/**
 * Tăng số lần xem của người dùng với video
 * @param {String} userId - ID của User
 * @param {String} videoId - ID của Video
 * @param {Number} watchTime - Thời gian xem thêm (giây)
 * @returns {Promise<UserVideo | null>}
 */
const incrementWatchCount = async (userId, videoId, watchTime) => {
  return await UserVideo.findOneAndUpdate(
    { userId, videoId },
    {
      $inc: {
        watchCount: 1,
        totalWatchTime: watchTime,
        recentWatchTime: watchTime,
      },
    },
    { new: true, upsert: true }
  );
};

/**
 * Cập nhật trạng thái Like, Share, Collection của video
 * @param {String} userId - ID của User
 * @param {String} videoId - ID của Video
 * @param {Object} updateData - Trạng thái mới (isLike, isShare, isCollection)
 * @returns {Promise<UserVideo | null>}
 */
const updateVideoStatus = async (userId, videoId, updateData) => {
  return await UserVideo.findOneAndUpdate(
    { userId, videoId },
    { $set: updateData },
    { new: true, upsert: true }
  );
};

module.exports = {
  createUserVideo,
  getUserVideos,
  getUserVideoById,
  updateUserVideo,
  deleteUserVideo,
  incrementWatchCount,
  updateVideoStatus,
};
