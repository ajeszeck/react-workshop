import React, { Component } from 'react';

import './App.css';
import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      content: 'home'
    }
  }

  go(event){
    this.setState({
      content: event.target.id
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar onClick= {(event) => this.go(event)} />
      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard />
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content}/>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
