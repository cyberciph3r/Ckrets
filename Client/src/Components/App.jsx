import React from "react";
import Home from "./Home/Home";
import Create from "./Create/Create";
import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
