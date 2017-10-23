import React, {Component} from 'react'
import ghostHall from '../../images/ghost-hall.jpg'

class ProfileCard extends Component {
  render(){
    return(<div>
      <img src={ghostHall} />
      <p>Boo!! It's Libby and Anna!</p>
      <p>You like ghosts? So do we. Spooky, great!</p>
      </div>)
  }
}

export default ProfileCard;
