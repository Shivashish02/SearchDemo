import { useState } from "react";
import Rating from "./rating";


export default function Leftaside() {
    const [toggle1, setToggle1] = useState({ display: "none", sign: "+" });
    const [toggle2, setToggle2] = useState({ display: "none", sign: "+" });
    const [toggle3, setToggle3] = useState({ display: "none", sign: "+" });
    const toggler1 = () => {
        if (toggle1.display === "none") {
            setToggle1({ display: "inline", sign: "-" })
        }
        else {
            setToggle1({ display: "none", sign: "+" })
        }
    }
    const toggler2 = () => {
        if (toggle2.display === "none") {
            setToggle2({ display: "inline", sign: "-" })
        }
        else {
            setToggle2({ display: "none", sign: "+" })
        }
    }
    const toggler3 = () => {
        if (toggle3.display === "none") {
            setToggle3({ display: "inline", sign: "-" })
        }
        else {
            setToggle3({ display: "none", sign: "+" })
        }
    }


    return (<div className="left">
        <button type="button" className="collapsible" onClick={toggler1}>Brands<div>{toggle1.sign}</div></button>
        <div className="content" style={toggle1} >
            <div className="boxes">
                <input type="checkbox" />
                <label for="vehicle1">Mango</label><br />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <label for="vehicle1">H&M</label><br />
            </div>
        </div>
        <hr />
        <button type="button" className="collapsible" onClick={toggler2}>Price Range<div>{toggle2.sign}</div></button>
        <div className="content" style={toggle2} >
            <div className="boxes">
                <input type="checkbox" />
                <label for="vehicle1">Under 500</label><br />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <label for="vehicle1">500 to 2000</label><br />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <label for="vehicle1">2000 to 5000</label><br />
            </div>
        </div>
        <hr />
        <button type="button" className="collapsible" onClick={toggler3}>Ratings<div>{toggle3.sign}</div></button>
        <div className="content" style={toggle3} >
            <div className="boxes">
                <input type="checkbox" />
                <Rating num="5" />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <Rating num="4" />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <Rating num="3" />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <Rating num="2" />
            </div>
            <div className="boxes">
                <input type="checkbox" />
                <Rating num="1" />
            </div>
        </div>
    </div>)
}