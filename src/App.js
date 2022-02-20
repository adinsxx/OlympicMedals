import React, { useState, useEffect, useRef } from 'react';
import Country from './components/Country';
import NewCountry from './components/NewCountry';
import './App.css';
import axios from "axios";

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const apiEndpoint = "https://cmccurrie-medalsapi.azurewebsites.net/swagger/index.html";

  const medals = useRef([
    { id: 1, name: 'gold' },
    { id: 2, name: 'silver' },
    { id: 3, name: 'bronze' },
  ]);

  // this is the functional equivalent to componentDidMount
  useEffect(() => {
    // initial data loaded here
    let fetchedCountries = [
      { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 2 },
    ]
    setCountries(fetchedCountries);
  }, []);

  const handleAdd = async (name) => {
    // const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    // setCountries([...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 }));
    const {data: post} = await axios.post(apiEndpoint, {name: name});
    setCountries(countries.concat(post));
  }
  const handleDelete = async (countryId) => {
    // setCountries([...countries].filter(c => c.id !== countryId));
    const originalCountries = countries;
    setCountries(countries.filter(c => c.id !== countryId));
    try {
      await axios.delete(`${apiEndpoint}/${countryId}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("Record not found")
      } else {
        alert('An error has occurred');
        setCountries(originalCountries);
      }
    }
  }
  const handleIncrement = (countryId, medalName) => {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries ];
    mutableCountries[idx][medalName] += 1;
    setCountries(mutableCountries);
  }
  const handleDecrement = (countryId, medalName) => {
    const idx = countries.findIndex(c => c.id === countryId);
    const mutableCountries = [...countries ];
    mutableCountries[idx][medalName] -= 1;
    setCountries(mutableCountries);
  }
  const getAllMedalsTotal = () => {
    let sum = 0;
    medals.current.forEach(medal => { sum += countries.reduce((a, b) => a + b[medal.name], 0); });
    return sum;
  }
  return (
      <React.Fragment>
        <div className='appHeading'>
          Olympic Medals
          <span className='badge'>
          { getAllMedalsTotal() }
        </span>
        </div>
        <div className='countries'>
          { countries.map(country =>
              <Country
                  key={ country.id }
                  country={ country }
                  medals={ medals.current }
                  onDelete={ handleDelete }
                  onIncrement={ handleIncrement }
                  onDecrement={ handleDecrement } />
          )}
        </div>
        <NewCountry onAdd={ handleAdd } />
      </React.Fragment>
  );
}

export default App;