import React from "react";
import cardsService from "../services/cardsService";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";
import Card from "./card";

class MyCards extends React.Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardsService.getMyCards();

    if (data.length) {
      this.setState({
        cards: data,
      });
    }
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <PageHeader
          title={
            <>
              <i className="fa-solid fa-suitcase"></i> My Cards Page
            </>
          }
        />
        <div className="row">
          <div className="col-12">
            <p>Your cards are in the list below.</p>
          </div>
        </div>

        <div className="row">
          <Link to="/create-card">Create a New Card</Link>
        </div>

        <div className="row mb-3">
          {cards.length ? (
            cards.map((card) => <Card key={card._id} card={card} />)
          ) : (
            <p>No cards yet...</p>
          )}
        </div>
      </div>
    );
  }
}

export default MyCards;