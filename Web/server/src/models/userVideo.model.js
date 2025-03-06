const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const userVideoSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    watchCount: {
      type: Number,
      default: 0,
    },
    totalWatchTime: {
      type: Number,
      default: 0,
    },
    recentWatchTime: {
      type: Number,
      default: 0,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    isShare: {
      type: Boolean,
      default: false,
    },
    isCollection: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userVideoSchema.plugin(toJSON);

const UserVideo = mongoose.model("UserVideo", userVideoSchema);

module.exports = UserVideo;
