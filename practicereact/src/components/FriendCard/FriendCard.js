import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img id={this.props.id} onClick={() => this.props.onClick(this.props.id)} src={this.props.image}  />
        </div>
      </div>
    )
  }
}
export default FriendCard;
