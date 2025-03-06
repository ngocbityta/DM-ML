const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const videoSchema = mongoose.Schema(
  {
    like: {
      type: Number,
      required: true,
    },
    like: {
      type: Number,
      required: true,
    },
    collection: {
      type: Number,
      required: true,
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
