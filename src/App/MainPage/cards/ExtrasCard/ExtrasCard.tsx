import { ProjectCard } from "../components";
import CardContainer from "../components/CardContainer";

import { GamePic } from "../../../../static";

function ExtrasCard() {
  return (
    <CardContainer>
      <>
        <h2 className="header2">Side Projects:</h2>

        <ul>
        <li>
            <ProjectCard
              title="Drone Battles"
              subtext="(Coming soon) A VR experience where you can fly drones using the controller, and battle with your friends."
              readmeIntro="This is my real attempt to create a fully functional VR game designed for the quest platform. This will be very similar to the concept of battle bots but with drones and in VR. I'm using Unity, and C# to create this game. Along with OpenXR to make it cross platform. And I'm using Unity Services to make it Multiplayer."
              liveDemoLink={"temp"}
              image={"temp"}
              imageAlt="temp"
              githubLink={null}
            />
          </li>
          <li>
            <ProjectCard
              title="moreWishes"
              subtext="An iPhone app that alerts you at 10:10, 11:11, & 12:12"
              readmeIntro="This is my first jump for creating iOS apps, This app was a good way for me to learn Swift, SwiftUI, & XCode. todo - put more here"
              liveDemoLink={"https://apps.apple.com/us/app/morewishes/id6450796262"}
              image={"temp"}
              imageAlt="temp"
              githubLink={null}
            />
          </li>
          <li>
            <ProjectCard
              title="Point Click Social BETA"
              subtext="A social game inspired by Club Penguin and old web social games where you can walk around and chat with friends"
              readmeIntro="This is my second jump to Game Development, This is a Club Penguin like online chat game built with Unity, and a Rails back-end using Websockets and Redis to communicate inbetween servers. Has working logins, Save Login, Chatting, Clothes, and more to come. !(please excpect to encounter bugs/errors when playing since i am still working on this currently)! (this is a very very early work in progress and will be updated regularly over a year or two so come check out what I've added and feel free to say hi if im online!)"
              liveDemoLink={"https://pointclicksocial.johnfarina.co/"}
              image={GamePic}
              imageAlt="temp"
              githubLink={null}
            />
          </li>
        </ul>
      </>
    </CardContainer>
  )
}

export default ExtrasCard;