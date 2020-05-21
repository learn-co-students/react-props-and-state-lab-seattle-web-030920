import React from 'react'

import Pet from './Pet'


class PetBrowser extends React.Component {

  // renderPets = () => {
  //  return this.props.pets.map((pet) => {
  //    return <Pet pet={pet} key={pet.id}/>
  //  })
  // }

  renderPets = () => this.props.pets.map((pet) => 
    <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id}/>
  )

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
