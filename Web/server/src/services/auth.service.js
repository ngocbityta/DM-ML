const httpStatus = require("http-status");
const Video = require("../models/video.model");
const ApiError = require("../utils/ApiError");

/**
 * Create a video
 * @param {Object} videoData
 * @returns {Promise<Video>}
 */
const createVideo = async (videoData) => {
  return await Video.create(videoData);
};

/**
 * Get video by ID
 * @param {string} id
 * @returns {Promise<Video>}
 */
const getVideoById = async (id) => {
  const video = await Video.findById(id);
  if (!video) {
    throw new ApiError(httpStatus.NOT_FOUND, "Video not found");
  }
  return video;
};

/**
 * Get all videos
 * @returns {Promise<Array<Video>>}
 */
const getAllVideos = async () => {
  return await Video.find();
};

/**
 * Update video by ID
 * @param {string} id
 * @param {Object} updateData
 * @returns {Promise<Video>}
 */
const updateVideoById = async (id, updateData) => {
  const video = await Video.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  if (!video) {
    throw new ApiError(httpStatus.NOT_FOUND, "Video not found");
  }
  return video;
};

/**
 * Delete video by ID
 * @param {string} id
 * @returns {Promise}
 */
const deleteVideoById = async (id) => {
  const video = await Video.findByIdAndDelete(id);
  if (!video) {
    throw new ApiError(httpStatus.NOT_FOUND, "Video not found");
  }
};

module.exports = {
  createVideo,
  getVideoById,
  getAllVideos,
  updateVideoById,
  deleteVideoById,
};