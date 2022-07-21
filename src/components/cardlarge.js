import Rating from "./rating";

export default function Cardlarge(props) {
    return (
        <div className="cardlarge">
            <div className="imagecontainer"><img id="imglarge" src={props.image} /></div>
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
