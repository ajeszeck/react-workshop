import React, {Component} from 'react'
import logo from '../../images/Ghost-icon.png';

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <div className='container'>
            <ul className='list-inline nav-left nav-list'>
              <li onClick={this.props.onClick} id='home'>Home</li>
              <li onClick={this.props.onClick} id='ctfg'>CTFG</li>
              <li onClick={this.props.onClick} id='nhn'>NHN</li>
            </ul>
            <div className='brand'>
              <img src={logo} className="App-logo" alt="logo" />
              <h4>Ghosts are People, Too</h4>
            </div>
          </div>
        </div>
      </nav>
      )
  }
}

export default Navbar
