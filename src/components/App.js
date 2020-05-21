import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    const { type } = this.state.filters
    fetch(`/api/pets${type === 'all' ? "":'?type='+type}`  )
    .then(resp => resp.json())
    .then((data => this.setState({pets:data})))
  }

  adoptPet = (currentPetId) => {
    this.setState(prevStat => {
      return prevStat.pets.map(pet => {
        if (pet.id !== currentPetId) {
          return pet
        } else {
          pet.isAdopted = true
          return pet
        }
      })
    })
  }

  changeType = (selection) => {
    console.log(selection)
    this.setState({
      filters: {
        type: selection
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.changeType} 
              onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              onAdoptPet={this.adoptPet}
              pets={this.state.pets}/> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
