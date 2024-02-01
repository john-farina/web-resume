// import './ExtrasCard.scss';
// import GamePic from "../../../images/projects/PointClickSocial.png";

import { ProjectCard } from "../components";

function ExtrasCard() {
    return (
        <div id="card5" className="card">
        <div className="cardContents">
          <h2 className="header2">Side Projects:</h2>
  
          <ul>
            <li>
              <ProjectCard
                title="Point Click Social BETA"
                subtext="A social game inspired by Club Penguin and old web social games where you can walk around and chat with friends"
                readmeIntro="This is my second jump to Game Development, This is a Club Penguin like online chat game built with Unity, and a Rails back-end using Websockets and Redis to communicate inbetween servers. Has working logins, Save Login, Chatting, Clothes, and more to come. !(please excpect to encounter bugs/errors when playing since i am still working on this currently)! (this is a very very early work in progress and will be updated regularly over a year or two so come check out what I've added and feel free to say hi if im online!)"
                liveDemoLink={"https://pointclicksocial.johnfarina.co/"}
                image={`temp`}
                imageAlt="temp"
                githubLink={null}
              />
            </li>
          </ul>
        </div>
      </div>
    )
}

export default ExtrasCard;