import { ToastContainer } from "react-toastify";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gray-50 bg-[url('/bgimg.jpg')] bg-repeat relative bg-blur-sm ">
      <div className="absolute h-full w-full backdrop-blur-[2px] bg-black/3 z-10"></div>
      <div className="max-w-screen-lg mx-auto min-h-screen flex items-center justify-center relative z-30 py-8">
        <Card />
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;
