const httpStatus = require("http-status");
const userVideoService = require("../services/userVideo.service");

/**
 * Tạo bản ghi UserVideo mới
 */
const createUserVideo = async (req, res) => {
  try {
    const userVideo = await userVideoService.createUserVideo(req.body);
    res.status(httpStatus.CREATED).json(userVideo);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

/**
 * Lấy danh sách UserVideo
 */
const getUserVideos = async (req, res) => {
  try {
    const userVideos = await userVideoService.getUserVideos();
    res.status(httpStatus.OK).json(userVideos);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

/**
 * Lấy chi tiết UserVideo theo ID
 */
const getUserVideoById = async (req, res) => {
  try {
    const userVideo = await userVideoService.getUserVideoById(req.params.id);
    if (!userVideo) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "UserVideo not found" });
    }
    res.status(httpStatus.OK).json(userVideo);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

/**
 * Cập nhật UserVideo theo ID
 */
const updateUserVideo = async (req, res) => {
  try {
    const userVideo = await userVideoService.updateUserVideo(req.params.id, req.body);
    if (!userVideo) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "UserVideo not found" });
    }
    res.status(httpStatus.OK).json(userVideo);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

/**
 * Xóa UserVideo theo ID
 */
const deleteUserVideo = async (req, res) => {
  try {
    const userVideo = await userVideoService.deleteUserVideo(req.params.id);
    if (!userVideo) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "UserVideo not found" });
    }
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

/**
 * Tăng số lượt xem của user đối với video
 */
const incrementWatchCount = async (req, res) => {
  try {
    const { userId, videoId, watchTime } = req.body;
    const userVideo = await userVideoService.incrementWatchCount(userId, videoId, watchTime);
    res.status(httpStatus.OK).json(userVideo);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

/**
 * Cập nhật trạng thái Like, Share, Collection của video
 */
const updateVideoStatus = async (req, res) => {
  try {
    const { userId, videoId, isLike, isShare, isCollection } = req.body;
    const userVideo = await userVideoService.updateVideoStatus(userId, videoId, { isLike, isShare, isCollection });
    res.status(httpStatus.OK).json(userVideo);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
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
