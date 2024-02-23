import mongoose from "mongoose";

let GallerySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    gallery: {
      type: String,
    },
  },
  { collection: "GalleryImage" }
);

let GalleryImage = mongoose.model("GalleryImage", GallerySchema);

export default GalleryImage;
