import React from "react";
import Welcome from "./welcomepage/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interest from "./interestchoicepage/Interest";
import Browse from "./bowsepage/Browse";
import Learn from "./learnpage/Learn";
import Heropage from "./mainpage/Heropage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/interest" element={<Interest />}></Route>
          <Route path="/home" element={<Heropage />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
