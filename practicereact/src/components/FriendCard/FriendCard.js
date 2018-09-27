import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img id={this.props.id} src={this.props.image} onClick={() => this.props.onClick(this.props.id)} />
        </div>
      </div>
    )
  }
}
export default FriendCard;
