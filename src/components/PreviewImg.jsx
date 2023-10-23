/* eslint-disable react/prop-types */
function PreviewImg({ uploadImageData, loading }) {
  const { data } = uploadImageData || {};
  const { url } = data || {};
  console.log(url);

  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden">
      {uploadImageData !== "" ? (
        <div className="flex flex-col gap-5 justify-between h-full">
          <div className="flex-grow rounded-md overflow-hidden">
            <img src={url} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Copy image url
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Delete Image
            </button>
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
