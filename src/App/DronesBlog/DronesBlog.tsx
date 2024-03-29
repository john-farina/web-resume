import Header from "./Header";
import './DronesBlog.scss';
import { TheLine } from "../components";
import Post from "./Post";
import { backIcon, droneV1Image, testingMultiplayerVideo, testingSingleplayerVideo } from "../../static";
import VideoPlayer from "./VideoPlayer";
import { Link, ScrollRestoration } from "react-router-dom";

function DronesBlog() {
    return (
        <div className="drones-container">
            <ScrollRestoration />
            <Link className="backBtn" to="/">
                <img alt="back" className="backBtnIcon" src={backIcon} />
                <p className="btnText">back</p>
            </Link>
            <Header />
            <p className="paragraph">
                Since I'm building Battle Drones for VR, and most people don't have
                the opportunity to download and try it. I'm putting all of the necessary
                information about the game here, along with demos/videos of my progress
                on it.
            </p>

            <TheLine />

            <Post date="Feb 9th, 2024" title="The Basics">
                <p className="paragraph">
                    To start development - I knew I needed to set up drone flying, 
                    set up the Unity VR rig, set up a multiplayer hosting service, 
                    and build it for the Quest.
                </p>

                <p className="paragraph">
                    After working on it for a few weeks. I got the groundwork of 
                    the game working, but still have a lot more work to do involving 
                    the drone movement and multiplayer experience. That being said, 
                    it's a good start and I'm pretty excited to see where this 
                    project goes.
                </p>

                <div className="blogLine" />

                <p className="paragraph">
                    Here's a video of me testing it by myself while developing. 
                    <br/>
                    <i>*Note: The bug that happens when the drone hits a wall (it starts glitching back and forth)</i>{" "}
                    is currently being fixed now.
                </p>
                <div className="blogVideoContainer">
                    <VideoPlayer
                        url={testingSingleplayerVideo}
                    />
                </div>

                <div className="break" />

                <p className="paragraph">
                    And here's a video of me testing the basic multiplayer service I set up for 
                    the first time with my brother.
                </p>

                <div className="blogVideoContainer">
                    <VideoPlayer
                        url={testingMultiplayerVideo}
                    />
                </div>

                <div className="break" />

                <div className="blogLine" />

                <p className="paragraph">
                    After setting up the basics of the game, now I need to start a plan for 3D 
                    modeling the drone and animation ideas, which I'm starting to think of now. 
                    So, I started working on a 3D model for the drone <i>(early picture below)</i>.
                </p>

                <div className="blogImageContainer">
                    <img alt="" className="blogImage" src={droneV1Image} />
                </div>
            </Post>
        </div>
    )
}

export default DronesBlog;