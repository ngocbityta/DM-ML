const httpStatus = require("http-status");
const videoService = require("../services/video.service");

/**
 * Tạo một video mới
 */
const createVideo = async (req, res) => {
  try {
    const video = await videoService.createVideo(req.body);
    res.status(httpStatus.CREATED).json(video);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/**
 * Lấy danh sách video
 */
const getVideos = async (req, res) => {
  try {
    const { limit } = req.query;
    const videos = await videoService.getVideos({}, { limit: parseInt(limit) || 10 });
    res.status(httpStatus.OK).json(videos);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/**
 * Lấy thông tin một video theo ID
 */
const getVideoById = async (req, res) => {
  try {
    const video = await videoService.getVideoById(req.params.videoId);
    if (!video) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Video không tồn tại" });
    }
    res.status(httpStatus.OK).json(video);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/**
 * Cập nhật video theo ID
 */
const updateVideo = async (req, res) => {
  try {
    const video = await videoService.updateVideo(req.params.videoId, req.body);
    if (!video) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Video không tồn tại" });
    }
    res.status(httpStatus.OK).json(video);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/**
 * Xóa video theo ID
 */
const deleteVideo = async (req, res) => {
  try {
    const video = await videoService.deleteVideo(req.params.videoId);
    if (!video) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Video không tồn tại" });
    }
    res.status(httpStatus.OK).json({ message: "Xóa video thành công" });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/**
 * Tăng lượt xem video
 */
const incrementViews = async (req, res) => {
  try {
    const video = await videoService.incrementViews(req.params.videoId);
    if (!video) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Video không tồn tại" });
    }
    res.status(httpStatus.OK).json(video);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

/**
 * Tăng lượt thích video
 */
const incrementLikes = async (req, res) => {
  try {
    const video = await videoService.incrementLikes(req.params.videoId);
    if (!video) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Video không tồn tại" });
    }
    res.status(httpStatus.OK).json(video);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
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

