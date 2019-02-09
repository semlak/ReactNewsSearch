import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap';
import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import Search from "./components/Search/Search.js";
import Results from "./components/Results/Results.js";
import Article from "./components/Article";

// import MemoryGame from "./components/Game/Main.js"

export default class App extends Component {
  state = {
    searchTopic: "",
    startYear: "",
    endYear: "",
    results: [],
    savedArticles: [],
    user: null
  };

  handleInputChange = event => this.setState({[event.target.name]: event.target.value})

  render = ()=> {
    console.log("appState: " , this.state)
    return (
      <div className="App">
        <Navbar/>
        <Jumbo/>
         {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
        {/* </header> */}
        <Container>
          <Search 
            searchTopic={this.state.searchTopic}  
            handleInputChange={this.handleInputChange}
          />
          <Results
            // {this.state}
            // {this.state.results.map(article => <Article article={article} />)}
            // {this.state.results.map(article => <Article 
              // headline={article.headline}
              // url={article.url}  
             
            // />)}
          />
       </Container>
      </div>
    );
  }
}

// export default App;
