import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedImageTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];
  const allowedVideoTypes = [
    "video/mp4",
    "video/quicktime",
    "video/webm",
    "video/x-matroska",
  ];

  if (
    allowedImageTypes.includes(file.mimetype) ||
    allowedVideoTypes.includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image and video files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 }, // ⬆️ Increase limit for videos (50MB)
});

export default upload;
