import React from 'react';
const Country = (props) => {
    const {name, borders, collingCode, area, population, flag}=(props.country);
    const flagStyle={width:'350px', display:"block", margin:'0 auto', padding:'10px'};
    const btnStyle={padding:'10px 15px', backgroundColor:'green', color:'white', cursor:'pointer'}
    const handleAddCountry=props.handleAddCountry;
    return (
        <div>
            <h1>This is {name} </h1>
            <h3>Total population is {population}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <button onClick={()=>handleAddCountry(props.country)} style={btnStyle}>Add Country</button>
        </div>
    );
};

export default Country;