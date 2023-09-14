import React from "react";
import Welcome from "./welcomepage/Welcome";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import Interest from "./interestchoicepage/Interest";
import Browse from "./bowsepage/Browse";
import Learn from "./learnpage/Learn";
import Heropage from "./mainpage/Heropage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} /> {/* Root route */}
          <Route path="/skillgain" element={<Welcome />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/home" element={<Heropage />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
