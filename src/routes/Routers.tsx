import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import Authorization from "../pages/Authorization/Authorization";


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/authorization" element={<Authorization />} />
    </Routes>
  );
};

export default Router;