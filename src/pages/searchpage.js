import background from "../imgs/background.jpg";
import Latesttrends from '../components/latesttrends';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate("/result");
        }
    }
    return (
        <div className="searchpage" style={myStyle} >
            <div className='searchbox'>
                <input type="text" placeholder="Search" onClick={() => { setToggle(true) }} onKeyPress={handleKeyPress} />
            </div>
            {toggle && <Latesttrends />}
        </div>
    );
}
