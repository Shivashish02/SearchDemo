import Cardlarge from "./cardlarge"
export default function Rightaside(props) {
    return (<div className="right">
        {props.card.map((obj) =>
            <Cardlarge key={obj.index} image={obj.img} product={obj.product} ogprice={obj.ogprice} saleprice={obj.saleprice} star={obj.star} ratings={obj.ratings} />
        )}
    </div>)
}