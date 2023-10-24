/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import FileDragDrop from "./FileDragDrop";

const ImageUpload = ({ setUploadImageData, setLoading }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    setLoading(true);
    setUploadImageData("");
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            key: import.meta.env.VITE_IMGBB_API_KEY,
          },
        }
      );
      setUploadImageData(response.data);
      setLoading(false);
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
      <FileDragDrop setImage={setImage} />
      {image !== null && (
        <button
          type="button"
          onClick={handleImageUpload}
          className={`text-blue-900 hover:text-white bg-blue-100 hover:bg-blue-500 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none disabled:bg-blue-200 disabled:text-blue-900 `}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
