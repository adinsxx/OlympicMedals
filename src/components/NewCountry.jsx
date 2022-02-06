import React, { Component } from 'react';

export class NewCountry extends Component {
    state = {

    }

    togglePrompt = () =>{
      //triggers prompt box
      const countryName = prompt('Enter country name');
      if (countryName && countryName.trim().length > 0){
          this.props.onAdd(countryName);
      }
    }


  render() {
    return (
    <div className='newCountryButton'>
      <button onClick={this.togglePrompt}>Add Country</button>
    </div>
    );
  }
}

export default NewCountry;
