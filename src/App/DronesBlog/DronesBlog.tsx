import Header from "./Header";
import './DronesBlog.scss';

function DronesBlog() {
    return (
        <div className="drones-container">
            {/* <a className="backBtn" href="/">
                <i className="fa-solid fa-angle-left arrow"></i>
                <p className="paragraph">back</p>
            </a> */}
            <Header />
            <p className="paragraph">
                Since I'm building Battle Drones for VR and most people don't have
                the oppurtinuty to download and try it. I'm putting all of the nessecary
                information about the game here. And demos/videos of my progress on it
            </p>

            <div className="informationContainer">
                <p className="header3 date">Feb 9th, 2024</p>
                <p className="header2">Title Here</p>
                <p className="paragraph">This is information about it</p>
                <p className="paragraph">nice</p>
            </div>
        </div>
    )
}

export default DronesBlog;