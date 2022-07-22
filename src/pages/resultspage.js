import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Leftaside from "../components/leftaside";
import Rightaside from "../components/rightaside";
import { faker } from '@faker-js/faker';

let num
let arr2 = ["Mango", "Mango", "H&M", "Mango", "Mango", "H&M", "Mango", "H&M"]
let card2 = [], card3 = []
for (let i = 0; i <= 7; i++) {
    num = Math.floor(Math.random() * 2000)
    card2 = [...card2, {
        index: i,
        img: faker.image.fashion(480, 600, true),
        product: faker.commerce.productName(),
        saleprice: num,
        ogprice: Math.floor(num + (Math.random() * 1000)),
        star: Math.floor(1 + (Math.random() * 5)),
        ratings: Math.floor((Math.random() * 100)),
        brand: arr2[i]
    }]
}


export default function Resultpage() {
    let navigate = useNavigate();
    const [Filters, setFilters] = useState({
        brands: [],
        price: [],
        ratings: []
    })
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate("/result");
        }
    }
    if (Filters.brands.length && Filters.price.length && Filters.ratings.length) { card3 = [...card2] }
    else {
        card3 = card2.filter(entry => {
            let true1 = true, true2 = true, true3 = true
            if (Filters.brands.length) {
                if (Filters.brands.indexOf(entry.brand) === -1) {
                    true1 = false
                }
            }
            if (Filters.ratings.length) {
                if (Filters.ratings.indexOf(entry.star) === -1) {
                    true2 = false
                }
            }
            if ((Filters.price.length) && (Filters.price.length !== 2)) {
                if ((Filters.price.indexOf(1) !== -1) && (entry.saleprice > 1000)) {
                    true3 = false
                }
                if ((Filters.price.indexOf(2) !== -1) && (entry.saleprice < 1000)) {
                    true3 = false
                }
            }
            return (true1 && true2 && true3)
        })
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
                <Leftaside handleFilters={filters => setFilters(filters)} />
                <Rightaside card={card3} />
            </div>
        </div>
    );
}