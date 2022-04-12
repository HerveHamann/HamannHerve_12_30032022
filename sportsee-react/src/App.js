import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
