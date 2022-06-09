import React from "react";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Signup from "./components/signup";

import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/signin";
import usersService from "./services/usersService";
import LogOut from "./components/logout";
import BizSignup from "./components/bizSignup";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import DeleteCard from "./components/deleteCard";
import EditCard from "./components/editCard";

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({
      user: usersService.getUser(),
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="app d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main className="container flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/my-cards"
              element={
                <ProtectedRoute bizOnly>
                  <MyCards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-cards/edit/:id"
              element={
                <ProtectedRoute bizOnly>
                  <EditCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-cards/delete/:id"
              element={
                <ProtectedRoute bizOnly>
                  <DeleteCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-card"
              element={
                <ProtectedRoute bizOnly>
                  <CreateCard />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup-biz" element={<BizSignup />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </main>
        <footer className="bg-dark bg-gradient">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
