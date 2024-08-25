import './App.css';
import React from "react"
import StudentList from "./component/student/StudentList";
import StudentCreate from "./component/student/StudentCreate";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import StudentEdit from "./component/student/StudentEdit";


function App() {
  return (
      <BrowserRouter>
          <div className="container mt-5">
              <nav className="mb-4">
                  <ul className="nav">
                      <li className="nav-item">
                          <NavLink
                              to="/student"
                              className={({ isActive }) =>
                                  isActive ? 'nav-link active' : 'nav-link'
                              }
                              style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
                          >
                              Danh sách
                          </NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink
                              to="/create"
                              className={({ isActive }) =>
                                  isActive ? 'nav-link active' : 'nav-link'
                              }
                              style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
                          >
                              Thêm mới
                          </NavLink>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/create" element={<StudentCreate />} />
                  <Route path="/student" element={<StudentList />} />
                  <Route path="/edit/:id" element={<StudentEdit />} />
              </Routes>
          </div>
          <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
