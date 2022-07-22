export default function Rating(props) {
    let arr = []
    for (let i = 1; i <= parseInt(props.num, 10); i++) {
        arr.push(<span className="fa fa-star checked" key={i}></span>)
    }
    for (let j = parseInt(props.num, 10) + 1; j <= 5; j++) {
        arr.push(<span className="fa fa-star" key={j}></span>)
    }
    return (<div>
        {arr}
    </div>)
}