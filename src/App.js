import React, {Component} from 'react';
import Country from './components/Country';
import './App.css';
import NewCountry from './components/NewCountry';

class App extends Component {
  state = {
    countries: [
      {id: 1, name: 'United States', gold: 3, silver: 2, bronze: 8},
      {id: 2, name: 'China', gold: 6, silver: 2, bronze: 8},
      {id: 3, name: 'Germany', gold: 2, silver: 2, bronze: 8},
    ],
    medals: [
      {id: 1, name: 'gold'},
      {id: 2, name: 'silver'},
      {id: 3, name: 'bronze'},
    ]
  }

  handleAdd = (countryId, medalName) => {
    const countries = [...this.state.countries];
    const idx = countries.findIndex((c) =>c.id === countryId)
    countries[idx][medalName]+=1;
    this.setState({countries: countries});
  }
  handleSubtract = (countryId, medalName) => {
    const countries = [...this.state.countries];
    const idx = countries.findIndex((c) =>c.id === countryId)
    countries[idx][medalName]-=1;
    this.setState({countries: countries});
  }

  getTotalMedals(){
    let sum=0;
    this.state.medals.forEach(medal => { sum += this.state.countries.reduce((a, b) => a + b[medal.name], 0);})
    return sum
  }

  render() { 
    return (
        <React.Fragment>
          {/* {this.state.countries.map(country =>
            <Country key={country.id} country={country}/>
          )} */}
          <div className='header'>
            Olympic Medals 
            <span className='badge'> <br></br>  
              {this.getTotalMedals() }
            </span>
            </div>
            <div className='countries'>
              { this.state.countries.map(country => 
              <Country
                key={country.id}
                country={country}
                medals={this.state.medals}
                onAdd={this.handleAdd}
                onSubtract={this.handleSubtract}/>
                
              )}
            </div>
            <div className='newCountries'>
              <NewCountry/>
            </div>

        </React.Fragment>
    );
  }
}

export default App;
