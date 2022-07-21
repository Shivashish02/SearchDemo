import Rating from "./rating";
import heart from "../imgs/heart.png";
import { useState } from "react";
export default function Cardlarge(props) {
    const [display, setDisplay] = useState({ display: "none" });
    return (
        <div className="cardlarge" onMouseEnter={() => setDisplay({ display: "block" })}
            onMouseLeave={() => setDisplay({ display: "none" })}>
            <div className="imagecontainer">
                <img id="imglarge" src={props.image} />
                <img id="icon" src={heart} />
                <div id="viewprod" style={display}></div>
                <div id="viewprodtext" style={display}>View Product</div>
            </div>
            <div>
                <p id="prod">{props.product}</p>
                <div className="sale">
                    <div className="prod"><s>Rs.{props.ogprice}</s></div>
                    <div className="prod">Rs.{props.saleprice}</div>
                </div>
                <br />
                <div className="sale">
                    <Rating num={props.star} />
                    <div id="mleft">{props.ratings}</div>
                </div>
            </div>
        </div>
    );
}
