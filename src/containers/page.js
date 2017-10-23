import React, { Component } from 'react';
import ProfileCard from './profile_card'
import Content from './content'
import Navbar from './navbar'

var description = 'A just-outside-of-the-city boy with a penchant for shorts and Ruby.'
var username = 'Ian Peter Greenburg'

class Page extends Component {
  constructor(){
    super()
    this.state = {
      content: 'home',
    }
  }
  go(event){
    this.setState({
      content: event.target.id
    })
  }
  render() {
    return (
      <div className='page'>
        <Navbar
          onClick={(event) => this.go(event)}
        />
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard username={username} description={description}/>
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
