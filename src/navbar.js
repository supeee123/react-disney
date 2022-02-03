import { Link } from "react-router-dom";
const Navb = () => {
    return (
        <div className="header">
            <div className="h1">
                <ul>
                   <li><Link to="/">DISNEY</Link></li>
                    <li id="l1"><a href="/">TV</a>
                    <ul>
                    <li><a href="/"> Hotstar</a></li>
                    <li><a href="/">quix</a></li>
                    <li><a href="/">star jalsa</a></li>
                    <li><a href="/"> star vijay</a></li>
                    <li><a href="/">star bharat</a></li>
                    <li><a href="/">asianet</a></li>
                    </ul>
                    </li>
                    <li id="l2"><a href="/">Movies</a>
                    <ul>
                        <li><a href="/">hindi</a></li>
                        <li><a href="/">english</a></li>
                        <li><a href="/">telgu</a></li>
                        <li><a href="/">tamil</a></li>
                        <li><a href="/">malyalam</a></li>
                    </ul>
                    </li>
                    <li id="l3"><a href="/">sports</a>
                    <ul>
                        <li><a href="/">Cricket</a></li>
                        <li><a href="/">Kabbadi</a></li>
                        <li><a href="/">Football</a></li>
                        <li><a href="/">Hockey</a></li>
                        <li><a href="/">Tennis</a></li>
                        <li><a href="/">Esports</a></li>
                        <li><a href="/">Golf</a></li>
                        <li><a href="/">Wrestling</a></li>
                    </ul>
                    </li>
                    <li><a href="/">Kids</a></li>
                </ul>
            </div>
            <div className="h2">
                <a href="/" id="search">search</a>
                <Link to="/watch"><button id="btn2" >Subscribe</button></Link>
                <Link to="/log"><button id="btn3">Login</button></Link>
            </div>
        </div>
    );
}

export default Navb;