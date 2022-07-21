import background from "../imgs/background.jpg";
import Latesttrends from '../components/latesttrends';
import { useState } from "react";
export default function Searchpage() {
    const [toggle, setToggle] = useState(false);
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
    return (
        <div className="searchpage" style={myStyle} >
            <div className='searchbox'>
                <input type="text" placeholder="Search" onClick={() => { setToggle(true) }} />
            </div>
            {toggle && <Latesttrends />}
        </div>
    );
}
