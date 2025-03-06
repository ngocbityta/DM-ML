const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const userVideoSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    watchCount: {
      type: Number,
      required: true,
    },
    totalWatchTime: {
      type: Number,
      required: true,
    },
    recentWatchTime: {
      type: Number,
      required: true,
    },
    isLike: {
      type: Boolean,
      required: true,
    },
    isShare: {
      type: Boolean,
      required: true,
    },
    isCollection: {
      type: Boolean,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
videoSchema.plugin(toJSON);

const UserVideo = mongoose.model("UserVideo", userVideoSchema);

module.exports = UserVideo;
