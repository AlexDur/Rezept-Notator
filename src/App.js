/* TODO: Bring in useEffect and useState für dynamic refresh (not whole page is refreshed but only parts (components?) of it */
import React from "react";

import "./App.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Detail from "./pages/Detail";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <div className="container">
            <li>
              <Link to="/add_edit">Add/Edit</Link>
            </li>
            <li>
              <Link to="/" element={<Home />}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </div>
        </nav>

        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add_edit" element={<AddEdit />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
