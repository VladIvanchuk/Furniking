import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Details, Authorization, Profile, Shop } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
