import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // petCard=()=>this.props.pets.map(thisPet=><Pet pet={thisPet}/>)
  
  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
