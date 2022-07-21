import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Leftaside from "../components/leftaside";
import Rightaside from "../components/rightaside";

export default function Resultpage() {
    let navigate = useNavigate();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate("/result");
        }
    }
    
    return (
        <div>
            <div className="results" >
                <div className='searchboxresult'>
                    <input className="input" type="text" placeholder="Search" onKeyPress={handleKeyPress} />
                </div>
            </div>
            <h1 className="ml">Search Results</h1>
            <div className="show">
                <Leftaside/>
                <Rightaside/>
            </div>
        </div>
    );
}