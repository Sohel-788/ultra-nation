import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import '../../App.css';
const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="container">
            <h1 className='header'>Ultra-Nation</h1>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
        </div>
    );
};

export default Home;

