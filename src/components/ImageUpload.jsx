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
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            key: import.meta.env.VITE_IMGBB_API_KEY, // Replace with your actual API key
          },
        }
      );

      setUploadImageData(response.data);
      setLoading(false);

      // Handle the response from the API
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      // Handle errors, e.g., network issues, invalid API key, etc.
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
