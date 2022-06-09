import React from "react";
import usersService from "../services/usersService";

class LogOut extends React.Component {
  state = {};

  componentDidMount() {
    usersService.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogOut;
