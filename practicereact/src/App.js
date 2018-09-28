import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import TitleCard from "./components/TitleCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    notSelected: friends,
    score: 0,
    highScore: 0,
    message: "Don't pick the same one twice! Select any image to start!"
  };

  onClick = id => {
    let selectedId = this.state.notSelected.find(friend => friend.id === id);
    if (selectedId === undefined) {
      if (this.state.score > this.state.highScore) {
        this.setState({
          friends: friends,
          notSelected: friends,
          highScore: this.state.score,
          score: 0,
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
        notSelected: this.state.notSelected.filter(friend => friend.id !== id),
        score: this.state.score + 1,
        message: "Correct!"
      });
      console.log("route 3")
    }



    this.state.friends.sort(() => Math.random() - 0.5)

  }

  render() {
    return (
      <div>
        <TitleCard highScore={this.state.highScore} score={this.state.score} message={this.state.message}/>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard id={friend.id} onClick={this.onClick} key={friend.id} name={friend.name} image={friend.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
