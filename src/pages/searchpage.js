import background from "../imgs/background.jpg";
import Latesttrends from '../components/latesttrends';
import Searchbox from '../components/searchbox';

export default function Searchpage() {
    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '100vh',
        fontSize: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
    };
    return (
        <div className="searchpage" style={myStyle}>
            <Searchbox />
        </div>
    );
}
