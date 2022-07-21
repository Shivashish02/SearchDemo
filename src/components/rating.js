export default function Rating(props) {
    let arr = []
    for (let i = 1; i <= parseInt(props.num, 10); i++) {
        arr.push(<span class="fa fa-star checked"></span>)
    }
    for (let j = parseInt(props.num, 10) + 1; j <= 5; j++) {
        arr.push(<span class="fa fa-star"></span>)
    }
    return (<div>
        {arr}
    </div>)
}