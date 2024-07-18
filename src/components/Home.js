import React from 'react';
import '../App.css';
import waterImage from '../assets/images/water.jpg';

function Home({setActiveComponent}){
    const handleLoginClick=()=>{
        setActiveComponent('login');
    };

    return(
    <div className="Home" style={{backgroundImage:`url(${waterImage})`}}>
        <header className="App-header">
            <h1>Welcome To Crates-Based Direct Water Supply System</h1>
        </header>
        <nav className="nav-links" >
            <p onClick={()=>setActiveComponent('home')}
            className="nav-link">Go to Home</p>
            <p onClick={()=>setActiveComponent('about')}
            className="nav-link">Go to About</p>
            <p onClick={()=>setActiveComponent('projectdetails')}
            className="nav-link">ProjectDetails</p>
        </nav>
        <h1>Overview</h1>
        <p className="water-infor">
            Water is essential for all known forms of life. It covers about 71% of the Earth's surface, mostly in seas and oceans. It is vital for agriculture,industrial, and sustaining life. Clean, accessible water is crucial for health, survival and development.
        </p>
        <div className="button-container">
        <button type="button" onClick={handleLoginClick}>Login</button>
        </div>
        
    </div>
    
 ); 
}
export default Home;