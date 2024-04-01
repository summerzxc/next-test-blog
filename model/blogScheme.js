import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Blog = Schema({
  title: String,
  description: String,
  text: String,
  image: {
    type: String,
    default: "none",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
  },
});

let blogModel;
if (mongoose.models.Blog) {
  blogModel = mongoose.models.Blog;
} else {
  blogModel = mongoose.model("Blog", Blog);
}

export default blogModel;
