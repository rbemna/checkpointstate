import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    Person: {
      fullName: "Emna Rbii",
      bio: "I am a fullstack JS developer",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPo3z8GlAEWSlvpVHOWNp-Xc6X6VT67ZyRPpdl1sdYP6I_izz12B-B_XwDhJagn_U1GGw&usqp=CAU",
      profession: "Web developer",
    },
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="profile">
        {this.state.show && (
          <div>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1>{this.state.Person.fullName}</h1>
            <h3>{this.state.Person.profession}</h3>
            <p className="bio">{this.state.Person.bio}</p>
          </div>
        )}
        <div>
          <button onClick={this.handleShowPerson}>
            {this.state.show ? "Hide profile" : "Show profile"}
          </button>
        </div>
      </div>
    );
  }
}
export default App;
