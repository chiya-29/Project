import React from 'react';


function Navbar({setActiveComponent}){
    return(
        <nav className="nav-links" >
            <p onClick={()=>setActiveComponent('home')}
            className="nav-link">Go to Home</p>
            <p onClick={()=>setActiveComponent('about')}
            className="nav-link">Go to About</p>
            <p onClick={()=>setActiveComponent('projectdetails')}
            className="nav-link">ProjectDetails</p>
        </nav>
    );
};
export default Navbar;