import React from "react";
import { toast } from "react-toastify";
import cardsService from "../services/cardsService";
import withRouter from "./common/withRouter";

class DeleteCard extends React.Component {
  state = {};

  async componentDidMount() {
    if (window.confirm("Are you sure you want to delete?")) {
      await cardsService.deleteCard(this.props.params.id);
      toast.warning("Card was deleted");
      this.props.navigate("/my-cards");
      return;
    }

    await cardsService.getMyCards();
    this.props.navigate("/my-cards");
  }

  render() {
    return null;
  }
}

export default withRouter(DeleteCard);
