import background from "../imgs/background.jpg";
import Latesttrends from '../components/latesttrends';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker';

let card2 = []
for (let i = 0; i <= 4; i++) {
    card2 = [...card2, {
        index: i,
        img: faker.image.abstract(480, 600, true),
        product: faker.commerce.productName(),
    }]
}

export default function Searchpage() {
    const [toggle, setToggle] = useState(false);
    let navigate = useNavigate();
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        fontSize: '20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
    };
    if (toggle) {
        myStyle.height = ""
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate("/result");
        }
    }
    return (
        <div className="searchpage" style={myStyle} >
            <div className='searchbox'>
                <input className="input" type="text" placeholder="Search" onClick={() => { setToggle(true) }} onKeyPress={handleKeyPress} />
            </div>
            {toggle && <Latesttrends card={card2} />}
        </div>
    );
}
