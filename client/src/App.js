import React from 'react';
import logo from './logo.svg';
import './App.css';
import callAPI from './services/api'; // Import the API service

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    callAPI()
      .then(res => this.setState({ apiResponse: res })) // Set the state with the response
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
};

export default App;
