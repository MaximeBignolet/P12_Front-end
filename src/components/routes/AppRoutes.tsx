import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CurrentEmployees from "../../pages/CurrentEmployees";
import Front from "../layouts/Front";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Front>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current-employees" element={<CurrentEmployees />} />
        </Routes>
      </Front>
    </BrowserRouter>
  );
};

export default AppRoutes;
