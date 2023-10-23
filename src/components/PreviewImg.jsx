import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

/* eslint-disable react/prop-types */
function PreviewImg({ uploadImageData, loading }) {
  const [copy, setCopy] = useState(false);
  const { data } = uploadImageData || {};
  const { url, delete_url } = data || {};
  console.log(copy);

  return (
    <div className="w-full h-full overflow-hidden">
      {uploadImageData !== "" ? (
        <div className="flex flex-col gap-5 justify-between h-full">
          <div className="flex-grow rounded-md overflow-hidden bg-gray-50">
            <img src={url} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CopyToClipboard text={url} onCopy={() => setCopy(true)}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none "
              >
                Copy image url
              </button>
            </CopyToClipboard>

            <a
              href={delete_url}
              target="_blank"
              className="block"
              rel="noreferrer"
            >
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 "
              >
                Delete Image
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          {loading ? "loading..." : "image not uploaded yet"}
        </div>
      )}
    </div>
  );
}

export default PreviewImg;
