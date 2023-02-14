import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import MainNav from "./components/MainNav";
import Promote from "./components/Promote";
import Track from "./components/Track";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainNav />}>
        <Route index element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/track" element={<Track />} />
        <Route path="/promote" element={<Promote />} />
      </Route>
    </Routes>
  );
};

export default App;
