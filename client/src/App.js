import React from 'react';
import './App.css';
import MainContent from "./components/MainContent/MainContent";
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
        < MainContent />
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
};

export default App;
