import React, { Component } from 'react';

class Country extends Component {
  
  state = {
      name: 'United States',
      medal: 0,
  }
  increment = () => this.setState({medal: this.state.medal + 1});
  render() {
    return (
    <div className='country'>
        <div className='name'>
            {this.state.name}
        </div>
        <div className='medals'>
            Gold Medals: {this.state.medal}
            <button onClick={this.increment}>+</button>
        </div>
    </div>
    );
}
}

export default Country;
