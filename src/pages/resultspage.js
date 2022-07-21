import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Leftaside from "../components/leftaside";
import Rightaside from "../components/rightaside";
import { faker } from '@faker-js/faker';

let num
let card2 = []
for (let i = 0; i <= 7; i++) {
    num = Math.floor(Math.random() * 2000)
    card2 = [...card2, {
        index: i,
        img: faker.image.fashion(480, 600, true),
        product: faker.commerce.productName(),
        saleprice: num,
        ogprice: Math.floor(num + (Math.random() * 1000)),
        star: Math.floor(1 + (Math.random() * 5)),
        ratings: Math.floor((Math.random() * 100))
    }]
}
export default function Resultpage() {
    let navigate = useNavigate();
    const [card, setCard] = useState(card2);
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
                <Leftaside />
                <Rightaside card={card} />
            </div>
        </div>
    );
}