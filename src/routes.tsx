import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const Application = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Application;
