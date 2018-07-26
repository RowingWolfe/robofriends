import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Card from '../components/Card';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import {Header} from '../components/header';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    }

    //Not sure why this isn't required.
    //this.onSearchChange = this.onSearchChange.bind(this);
  }

componentDidMount(){
  //Execute when component is already mounted and can hold new data.
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    this.setState({ robots: users });
  });
}

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(event);
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>;
    } else {
    return (
      <div className="App">
        <header className="App-header" style={{height: 180}}>
          <Header/>
          <SearchBox onSearchChange={this.onSearchChange}/>
        </header>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
      </div>
    );
  }
  }
}

export default App;
