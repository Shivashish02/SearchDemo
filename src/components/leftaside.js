import { useState } from "react";
import Rating from "./rating";
import { useRef } from 'react';

let obj = {
    brands: [],
    price: [],
    ratings: []
}
export default function Leftaside(props) {
    const [toggle1, setToggle1] = useState({ display: "none", sign: "+" });
    const [toggle2, setToggle2] = useState({ display: "none", sign: "+" });
    const [toggle3, setToggle3] = useState({ display: "none", sign: "+" });
    // let brands = { "Mango": 1, "H&M": 1 };
    // const [price, setPrice] = useState({ display: "none", sign: "+" });
    // const [ratings, setRatings] = useState({ display: "none", sign: "+" });
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
    function clickhandler(value, bpr) {
        let currentIndex = obj[bpr].indexOf(value);
        if (currentIndex === -1) {
            obj[bpr].push(value)
        } else {
            obj[bpr].splice(currentIndex, 1)
        }
        props.handleFilters({ ...obj })
    }

    return (<div className="left">
        <button type="button" className="collapsible" onClick={toggler1}>Brands<div>{toggle1.sign}</div></button>
        <div className="content" style={toggle1} >
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler("Mango", "brands")} />
                <label htmlFor="vehicle1" >Mango</label><br />
            </div>
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler("H&M", "brands")} />
                <label htmlFor="vehicle1" >H&M</label><br />
            </div>
        </div>
        <hr />
        <button type="button" className="collapsible" onClick={toggler2}>Price Range<div>{toggle2.sign}</div></button>
        <div className="content" style={toggle2} >
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(1, "price")} />
                <label htmlFor="vehicle1" >Under 1000</label><br />
            </div>
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(2, "price")} />
                <label htmlFor="vehicle1" >1000 to 3000</label><br />
            </div>
        </div>
        <hr />
        <button type="button" className="collapsible" onClick={toggler3}>Ratings<div>{toggle3.sign}</div></button>
        <div className="content" style={toggle3} >
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(5, "ratings")} />
                <Rating num="5" />
            </div>
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(4, "ratings")} />
                <Rating num="4" />
            </div>
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(3, "ratings")} />
                <Rating num="3" />
            </div>
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(2, "ratings")} />
                <Rating num="2" />
            </div>
            <div className="boxes">
                <input type="checkbox" onClick={() => clickhandler(1, "ratings")} />
                <Rating num="1" />
            </div>
        </div>
    </div>)
}