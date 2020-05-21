import React from 'react'

class Filters extends React.Component {

  handleFetch = () => {
    this.props.onFindPetsClick()
  }

  handleChangeType = (e) => {
    this.props.onChangeType(e.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button 
          onClick={this.handleFetch} 
          className="ui secondary button">
            Find pets
          </button>
        </div>
      </div>
    )
  }
}

export default Filters
