import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CurrentEmployees from "../../pages/CurrentEmployees";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-employees" element={<CurrentEmployees />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
