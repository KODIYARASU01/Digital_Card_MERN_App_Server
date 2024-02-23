import GalleryImage from "../models/Gallery.model.js";

export const getGallery = async (req, res) => {
  try {
    await GalleryImage.find({ user: req.user.id });
    return res.status(401).send("Image fetched sucessfully");
  } catch (err) {
    return res.status(401).send("Image not found");
  }
};

export const postGallery = async (req, res) => {
  let { gallery } = req.body;

  try {
    let data = { gallery };
    const newImage = await GalleryImage.create({
      gallery: req.body.gallery,
      user: req.user.id,
    });
    res.status(201).json({ message: "Image uploaded successfully" + newImage });
  } catch (error) {
    console.error("Image upload failed:", error);
    res.status(500).json({ error: "Image upload failed" });
  }
};
export const putGallery = async (req, res) => {
  try {
    let gallery = await GalleryImage.findById(req.user.id);

    if (!gallery) {
      return res.status(401).json({ msg: "gallery not found" });
    }
    if (GalleryImage.user.toString !== gallery.id) {
      return res.status(401).json({ msg: "gallery not Autherized" });
    }

    const updateGallery = await GalleryImage.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updateGallery);
  } catch (err) {
    return res.status(401).send(err.message);
  }
};

export const deleteGallery = async (req, res) => {
  try {
    let { _id } = req.params;
    let deleteGallery = await GalleryImage.delete();

    return res.status(201).send("Gallery deleted Sucessfully" + deleteGallery);
  } catch (err) {
    return res.status(401).send("Failed to delete Gallery " + err.message);
  }
};
