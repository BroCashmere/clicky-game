import React, { Component } from "react";
import shuffle from "shuffle-array"
import FriendCard from "./components/FriendCard";
import TitleCard from "./components/TitleCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    highScore: 0,
    score: 0,
    notSelected: friends,
    message: "Don't pick the same one twice! Select any image to start!"
  };

  onClick = id => {
    let clickId = this.state.notSelected.find(friend => friend.id === id);

    if (clickId === undefined) {
      if (this.state.score > this.state.highScore) {
        this.setState({
          friends: friends,
          highScore: this.state.score,
          score: 0,
          notSelected: friends,
          message: "New high score!  Try again!"
        });
        console.log("route 1")
      }
      else {
        this.setState({
          friends: friends,
          score: 0,
          notSelected: friends,
          message: "You lost - try again!"
        });
        console.log("route 2")

      }
    }
    else {
      this.setState({
        friends: friends,
        score: this.state.score + 1,
        notSelected: this.state.notSelected.filter(friend => friend.id !== id),
        message: "Correct!"
      });
      console.log("route 3")
    }
    this.setState({
      friends: shuffle(this.state.friends)
    });
  }

  render() {
    return (
      <div>
        <TitleCard highScore={this.state.highScore} score={this.state.score} message={this.state.message}/>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard id={friend.id} name={friend.name} image={friend.image} onClick={this.onClick} key={friend.id}/>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
