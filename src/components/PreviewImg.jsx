import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
function PreviewImg({ uploadImageData, loading }) {
  const [copy, setCopy] = useState(false);

  const { data } = uploadImageData || {};
  const { url, delete_url } = data || {};
  const notify = () => toast.success(`Copied!`);

  useEffect(() => {
    setTimeout(() => {
      if (copy) {
        setCopy(false);
      }
    }, 3500);
  }, [copy]);

  return (
    <>
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
                  className={`text-blue-900 hover:text-white bg-blue-100 hover:bg-blue-500 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none disabled:bg-blue-200 disabled:text-blue-900 `}
                  onClick={notify}
                  disabled={copy}
                >
                  {copy ? "Copied url" : "Copy image url"}
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
                  className={`text-red-800 hover:text-white bg-red-100 hover:bg-red-500 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none `}
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
    </>
  );
}

export default PreviewImg;
