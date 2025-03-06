const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    collections: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
videoSchema.plugin(toJSON);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
