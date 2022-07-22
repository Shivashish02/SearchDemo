import Rating from "./rating";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
export default function Cardlarge(props) {
    const [display, setDisplay] = useState({ display: "none" });
    const [like, setLike] = useState(false);
    const clickhandler = () => {
        if (!like) {
            setLike(true)
        }
        else {
            setLike(false)
        }
    }
    return (
        <div className="cardlarge" onMouseEnter={() => setDisplay({ display: "block" })}
            onMouseLeave={() => setDisplay({ display: "none" })}>
            <div className="imagecontainer">
                <img id="imglarge" src={props.image} />
                <div id="icon" onClick={clickhandler}><IconContext.Provider value={{ className: "shared-class", size: 25 }}>
                    {!like && <BsHeart />}
                    {like && <BsHeartFill />}
                </IconContext.Provider></div>
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
