export default function Cardsmall(props) {
    return (
        <div className="card">
            <img id="imgsmall" src={props.image} alt="product" />
            <div className="container">
                <p>{props.product}</p>
            </div>
        </div>
    );
}
