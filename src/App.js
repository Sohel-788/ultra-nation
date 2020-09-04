import React, { useState, useEffect } from 'react';
import './App.css'
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';
const App = () => {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])
  // event handler
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className='container'>
      <div className="single-div">
        <h1>Total Country: {countries.length}</h1>
        <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
        }
      </div>
    </div>
  );
};

export default App;
