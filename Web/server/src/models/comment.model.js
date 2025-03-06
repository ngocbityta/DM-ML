const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
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

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
