import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const Country = (props) => {
    const {name, population, flag,alpha2Code}=(props.country);
    const flagStyle={width:'350px', display:"block", margin:'0 auto', padding:'10px'};
    const btnStyle={padding:'10px 25px', backgroundColor:'green', color:'white',marginRight:'10px', cursor:'pointer'}
    // second process to navigate
    const history=useHistory();
    const handleCountry=(alpha2Code)=>{
        const url=`/country/countryDetail/${alpha2Code}`;
        history.push(url);
    };
    return (
        <div>
        <h1>This is {name} </h1>
            <img style={flagStyle} src={flag} alt=""/>
        <h3>Total population is {population}</h3>
            <Link to={`/country/countryDetail/${alpha2Code}`}>
                <button style={btnStyle}>Detail</button>
            </Link>
                 {/* second process to navigate */}
                <button onClick={()=>handleCountry(alpha2Code)} style={btnStyle}>Detail</button>
        </div>
    );
};

export default Country;