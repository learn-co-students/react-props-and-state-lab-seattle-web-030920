import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  makePetComponents=()=>this.props.pets.map(currentpet=> <Pet onAdoptPet= {this.props.onAdoptPet} key={currentpet.id} pet={currentpet}/>)

  render() {
  return <div className="ui cards">{this.makePetComponents()}</div>
  }
}

export default PetBrowser
