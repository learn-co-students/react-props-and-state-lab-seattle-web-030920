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

  onAdopt=(petID)=>{
    this.setState((previousState)=>previousState.pets.map(pet=>{
      if(pet.id===petID){
        pet.isAdopted=true
        return pet
      }
      else{
        return pet
      }
    }))
  }

  onChangeType=(value)=>{
    this.setState({
      filters: {
        type: value
      }
    })
  }

  onFindPetsClick=()=>{
    const {type}=this.state.filters
    console.log(type)
    fetch('/api/pets'+(type==="all"?"":`?type=${type}`)).then(resp=>resp.json())
    .then(resp=> this.setState( {pets: resp} ))
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
              <PetBrowser onAdoptPet={this.onAdopt} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
