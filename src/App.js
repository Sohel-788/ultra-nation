import React from 'react';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import CountryDetail from './Component/CountryDetail/CountryDetail';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/country/countryDetail/:alpha2Code'>
          <CountryDetail />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import Country from './Component/Country/Country';
// import Cart from './Component/Cart/Cart';
// import './App.css';
// const App = () => {
//   const [countries, setCountries] = useState([]);
//   const [cart, setCart] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//       .catch(error => console.log(error))
//   }, [])
//   // event handler
//   const handleAddCountry = (country) => {
//     const newCart = [...cart, country];
//     setCart(newCart);
//   }
//   return (
//     <div className='container'>
//       <div className="single-div">
//         <h1>Total Country: {countries.length}</h1>
//         <Cart cart={cart}></Cart>
//         {
//           countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
//         }
//       </div>
//     </div>
//   );
// };

// export default App;