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

  getPets = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({pets: json}))
  }

  onFindPetsClick = () => {
    // console.log(e.target)
    // do something with filter
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    this.getPets(url)
  }

  onChangeType = (e) => {
    // console.log(e.target.value)
    this.setState( {
      filters: {
        type: e.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    // find pet by id
    // update state
    let newPets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    this.setState({pets: newPets})
   
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
