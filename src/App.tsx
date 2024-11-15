import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" min-h-screen w-full ">
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
