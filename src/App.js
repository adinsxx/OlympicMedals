import React, {useState, useEffect} from 'react';
import Country from './components/Country';
import './App.css';
import NewCountry from './components/NewCountry';

const App = () => {

  const [countries, setCountries] = useState([]);

  const handleDelete = (countryId) => {
    const mutableCountries = [...countries].filter(c => c.id !== countryId);
    setCountries(mutableCountries);
  }

  const handleAdd = (name) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(countries=>countries.id)) + 1;
    const mutableCountries = [...countries].concat({id: id, name: name, gold: 0, silver: 0, bronze: 0 });
    setCountries(mutableCountries)
  }
  
  useEffect(() => {
    let mutableCountries = [
      {id: 1, name: 'United States', gold: 3, silver: 2, bronze: 8},
      {id: 2, name: 'China', gold: 6, silver: 2, bronze: 8},
      {id: 3, name: 'Germany', gold: 2, silver: 2, bronze: 8},
    ]
    setCountries(mutableCountries);
  }, []);

  //   medals: [
  //     {id: 1, name: 'gold'},
  //     {id: 2, name: 'silver'},
  //     {id: 3, name: 'bronze'},
  //   ]
  // }

  useEffect(() => {
    let mutableMedals = [
      {id: 1, name: 'gold'},
      {id: 2, name: 'silver'},
      {id: 3, name: 'bronze'},
    ]
    setMedals(mutableMedals);
  }, []);
  const handleIncrement = (countryId, medalName) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(countries=>countries.id)) + 1;
    countries[id][medalName]+=1;
    setMedals(mutableMedals)
  }
  const handleSubtract = (countryId, medalName) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(countries=>countries.id)) + 1;
    countries[id][medalName]-=1;
    setMedals(mutableMedals)
  }

  const getTotalMedals = () =>{
    let sum=0;
    this.state.medals.forEach(medal => { sum += this.state.countries.reduce((a, b) => a + b[medal.name], 0);})
    return sum
  }




 
    return (
        <React.Fragment>
          {/* {this.state.countries.map(country =>
            <Country key={country.id} country={country}/>
          )} */}
          <div className='header'>
            Olympic Medals 
            <span className='badge'> <br></br>  
              {getTotalMedals}
            </span>
            </div>
            <div className='countries'>
              { this.state.countries.map(country => 
              <Country
                key={country.id}
                country={country}
                medals={state.medals}
                onIncrement={handleIncrement}
                onSubtract={handleSubtract}
                onDelete={handleDelete}
                />
                
              )}
              <NewCountry 
                onAdd={handleAdd}
              />
            </div>
        </React.Fragment>
    );
  }

export default App;
