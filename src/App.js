import React from "react";

// import 'tailwindcss/base';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './App.css'
import Landing from "./Landing/Landing";


function App() {

    // <div className="App
    //  flex items-center justify-center
    //  bg-blue-500 text-6xl text-white p-4
    //  ">

    // items-center justify-center
    // bg-blue-500  text-white p-4
    
    const appStyle = {
        height : window.innerHeight
    }
    return (
       <div className="App 
          app-main "
         style={appStyle}
          >
            <div className="landing-wrapper">
                 <Landing />
            </div>
        </div>
    )
}

export default App; 