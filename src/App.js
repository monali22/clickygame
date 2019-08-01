import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    Score:0,
    topScore:0,
    list:[],
    message:""
    
  };

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  componentDidMount(){
    this.setState({message:"Click an Image to begin"})
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends1= this.state.friends;
    friends1.map(friend => {if(friend.id === id){
      if(this.state.list.indexOf(friend)===-1){
      this.state.list.push(friend);
      this.setState({list:this.state.list})
      console.log(this.state.list)
      this.setState({Score:this.state.Score+1})
      console.log(this.state.Score)
      this.setState({message:"You guessed Correctly"})
      }
      else{
        
        if(this.state.topScore<this.state.Score){
          this.setState({topScore:this.state.Score})
        }
        this.setState({message:"You guessed Incorrectly"})
        this.state.list=[]
        this.setState({list:this.state.list})
        this.setState({list:this.state.list})
        this.setState({Score:0})
        
      }
      
    }
    }
      );
    // Set this.state.friends equal to the new friends array
    
    this.shuffle(this.state.friends)
    this.setState({ friends });
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title title={"CLICKY GAME"} subtitle={"Click on an image to earn points, but don't click on any more than once!"} score={this.state.Score} topScore={this.state.topScore} message={this.state.message}/>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
