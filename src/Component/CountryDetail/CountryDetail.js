import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    let {alpha2Code}=useParams();
    const [country, setCountry]=useState({});
    console.log(country)
    const {name,flag,alph2Code,population,currencies,capital,language,borders,area}=country;
    const flagStyle={width:'350px', display:"block", margin:'0 auto', padding:'10px'};
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/all/${alpha2Code}`)
            .then(res => res.json())
            .then(data => setCountry(data))
            .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h1>This is {name}</h1>
            {/* <img style={flagStyle} src={flag} alt=""/>
            <h3>Capital: {capital}</h3>
            <p>Language: {language}</p>
            <p>Alpha2Code: {alph2Code}</p>
            <p>Population: {population}</p>
            <p>Currency: {currencies}</p>
            <p>Currency: {currencies}</p>
            <p>Borders: {borders}</p>
            <p>Area: {area}</p> */}
        </div>
    );
};

export default CountryDetail;