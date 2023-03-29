import { Routes, Route } from "react-router-dom";
import { Home, Details, Authorization, Profile } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
