import React, { Component } from 'react';

export class NewCountry extends Component {
    state = {

    }

    togglePrompt = () =>{
      //triggers prompt box
      const name = prompt('Enter country name');
      if (name && name.trim().length > 0){
          this.props.onAdd(name);
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
