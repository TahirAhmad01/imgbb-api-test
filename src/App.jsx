import { ToastContainer } from "react-toastify";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-lg mx-auto min-h-screen flex items-center justify-center ">
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
