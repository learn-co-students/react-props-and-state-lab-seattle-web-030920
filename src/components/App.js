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

 fetchPets = () =>{
   let filter = this.state.filters.type==="all"? "": "?type="+this.state.filters.type
   let url = "/api/pets" + filter
   fetch(url)
   .then(res=>res.json())
   .then(data=>{
      this.setState({
        pets:data
      })
   })
  
  }
  onAdoptPet=(petId)=>{
   const newPets= this.state.pets.map(perPet=>{
     return perPet.id===petId? {...perPet,isAdopted:true}:perPet
    })
    this.setState({
      pets:newPets
    })
  }

  onChangeType=event=>{
    this.setState({
      filters:{...this.state.filters,type:event.target.value}
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
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.onChangeType}/>
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
