import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import PreviewImg from "./PreviewImg";

function Card() {
  const [uploadImageData, setUploadImageData] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <React.Fragment>
      <div className="p-4 bg-white shadow rounded-xl w-[900px]">
        <div className="text-center text-2xl font-semibold mb-6">ImgBB image upload</div>
        <div className="grid grid-cols-2 gap-4 divide-x-[2px]">
          <div>
            <ImageUpload
              setUploadImageData={setUploadImageData}
              setLoading={setLoading}
            />
          </div>

          <div className="px-3">
            <PreviewImg uploadImageData={uploadImageData} loading={loading} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
