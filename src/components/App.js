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
    console.log(`Fetch: ${this.state.filters.type}`)
    let URL = (this.state.filters.type !=="all") ? `/api/pets?type=${this.state.filters.type}` : '/api/pets'
    fetch(URL).then(res=>res.json()).then(listOfPets => {this.setState({pets: listOfPets})  })
  }

  filterType = (selected) => {
    this.setState({filters: {...this.state.filters, type: selected}})
  }


  adoptPet = (petID) => {
    console.log(`Filling out adoption paperwork`)
    this.setState({
      pets: [ ...this.state.pets.map(pet => {
        if (pet.id === petID) {pet.isAdopted = true}
        return pet
      }) ]
    })
    console.log(`Adoption complete!`)
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
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.filterType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
