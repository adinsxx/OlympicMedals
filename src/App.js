import React, {Component} from 'react';
import Country from './components/Country';
import './App.css';

class App extends Component {
  state = {
    countries: [
      {id: 1, name: 'United States', medal: 3},
      {id: 2, name: 'China', medal: 6},
      {id: 3, name: 'Germany', medal: 2},
    ]
  }
  render() { 
    return (
        <React.Fragment>
          {this.state.countries.map(country =>
            <Country key={country.id} country={country}/>
          )}
        </React.Fragment>
    );
  }
}

export default App;
