import React, { Component } from 'react';
class Reverse extends Component {
    state = {
      /*  Initial State */
      input: "",
      reversedText: ""
    };
  
    /* handleChange() function to set a new state for input */
    handleChange = event => {
      const value = event.target.value;
      this.setState({
        input: value
      });
    };
  
    /* handleReverse() function to reverse the input and set that as new state for reversedText */
    handleReverse = event => {
      event.preventDefault();
      const text = this.state.input;
      this.setState({
        reversedText: text
          .split("")
          .reverse()
          .join("")
      });
    };
  
    render() {
      return (
        <React.Fragment>
          { /* handleReverse() is called when the form is submitted */ }
          <form onSubmit={this.handleReverse}>
            <div>
              { /* Render input entered */}
              <label>Text: {this.state.input}</label>
            </div>
            <div>
             { /* handleChange() is triggered when text is entered */ }
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                placeholder="Enter a text"
              />
            </div>
            <div>
              <button>Reverse Text</button>
            </div>
          </form>
          { /* Render reversed text */}
          <p>Reversed Text: {this.state.reversedText}</p>
        </React.Fragment>
      );
    }
  }

  export default Reverse;