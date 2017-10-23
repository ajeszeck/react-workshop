import React, {Component} from 'react'
import Home from './Home.js'
import Ctfg from './Ctfg.js'
import Nhn from './Nhn.js'


class Content extends Component {
  render(){
    if (this.props.content === 'home') {
      return(<div><Home /></div>)
    } else if (this.props.content === 'ctfg') {
      return(<div><Ctfg /></div>)
    } else if (this.props.content === 'nhn') {
      return(<div><Nhn /></div>)
    }
  }
}

export default Content;
