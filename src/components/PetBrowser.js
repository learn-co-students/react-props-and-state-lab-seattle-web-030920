import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  loadPets = () => {
    return this.props.pets.map((petData) => (<Pet pet={petData} key={petData.id} onAdoptPet={this.props.onAdoptPet}/>))
  }

  render() {
    return <div className="ui cards">{this.loadPets()}</div>
  }
}

export default PetBrowser
