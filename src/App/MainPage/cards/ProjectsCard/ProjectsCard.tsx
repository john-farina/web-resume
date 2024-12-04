import { ProjectCard } from "../components";
import CardContainer from "../components/CardContainer";
import './ProjectsCard.scss';

import {
    soundscapeImage,
    snakeImage,
    tamagotchiImage,
    calculatorImage,
    wishesImage,
    inkCompanionsImage,
    fidgetProImage,
    GamePic
} from "../../../../static";

function ProjectsCard() {
    return (
        <CardContainer title="Projects">
            <>
                <h3 className="header3 projectHeader3">Current Side Project:</h3>
                <ProjectCard
                    title="Ink Companions"
                    subtext="(Coming soon) A Multiplatyer Virtual Pet game built in untity"
                    readmeIntro="This is a multiplayer game and a virtual pet game in one. It's a bit of a unique concept so I would recommend reading the blog post about what this game is, Just click the title to read more! Also just a fun thing to note Point Click Social below was the game that sparked my interest in the layout thats used for the multiplayer portion"
                    liveDemoLink={"https://blog.inkcompanions.com/12-2024/what-is-ink-companions/"}
                    image={inkCompanionsImage}
                    imageAlt="temp"
                    githubLink={null}
                />

   

                <h3 className="header3 projectHeader3">Full Stack:</h3>
                <ProjectCard
                    title="Point Click Social"
                    subtext="A social game inspired by Club Penguin and old web social games."
                    readmeIntro="(I'm no longer making updates to this game) This is my second jump to Game Development, This is a Club Penguin like online chat game built with Unity, and a Rails back-end using Websockets and Redis to communicate inbetween servers. Has working logins, Save Login, Chatting, Clothes. This isn't in a finished state so expect bugs while trying it, also you can just play without logging in"
                    liveDemoLink={"https://pointclicksocial.johnfarina.co/"}
                    image={GamePic}
                    imageAlt="temp"
                    githubLink={null}
                />

                <ProjectCard
                    title="[soundScapes]"
                    subtext="A background noise website made with Rails."
                    imageAlt="The homepage of soundscapes with a scrolling animation"
                    image={soundscapeImage}
                    readmeIntro="[soundScapes] is a platform for users to share their favorite sounds for Studying, Sleeping, etc. with the community. Users can create, read, update, and delete Soundscapes, as follow other users, comment on posts, like posts, and create posts."
                    githubLink={"https://github.com/john-farina/sleepScapes"}
                    liveDemoLink={"https://soundscapes.johnfarina.co"}
                />

                <ProjectCard
                    title="Snake"
                    subtext="This is a remake of Snake built in React, using rails backend to save highscores."
                    imageAlt="Playing a game of snake untill they lose"
                    image={snakeImage}
                    readmeIntro={
                        "This is a web recreation of the classic snake game, but when you get a highscore you can save it for the world to see. Using React inside of Rails."
                    }
                    githubLink={"https://github.com/john-farina/snake-port"}
                    liveDemoLink={"https://snake.johnfarina.co"}
                />

                <h3 className="header3 projectHeader3">iOS:</h3>
                <ProjectCard
                    title="Fidget Pro"
                    subtext="A Vision Pro app just made to pop bubbles. Why? Because when you buy a Vision Pro this is what your dying to do"
                    readmeIntro="Loved making this app for the Vision Pro, I really believe this is the future of tech so I had to make an app for it - just to learn how."
                    liveDemoLink={"https://apps.apple.com/us/app/fidget-pro/id6501970788"}
                    image={fidgetProImage}
                    imageAlt="temp"
                    githubLink={null}
                />
                <ProjectCard
                    title="moreWishes"
                    subtext="An iOS app that alerts you at 10:10, 11:11, & 12:12."
                    readmeIntro="This is my first jump for creating iOS apps, This app was a good way for me to learn Swift, SwiftUI, & how to develop with XCode."
                    liveDemoLink={"https://apps.apple.com/us/app/morewishes/id6450796262"}
                    image={wishesImage}
                    imageAlt="temp"
                    githubLink={null}
                />


                <h3 className="header3 projectHeader3">Front End:</h3>
                <ProjectCard
                    title="Tamagotchi"
                    subtext="A clone of the classic Tamagotchi hand-held game, built with
          vanilla JavaScript."
                    imageAlt="A user playing with the tamagotchi and showing off the menus"
                    image={tamagotchiImage}
                    readmeIntro={
                        "This Tamagotchi project is a digital recreation of the classic virtual pet. Built with Vanilla JavaScript and CSS, I tried to capture the essence of the original while adding to the web experience. With this project, you can take care of your Tamagotchi by feeding, playing, and healing it. Get ready to relive the tramatic experiences of taking care of the Tamagotchi but all on the web!"
                    }
                    githubLink={"https://github.com/john-farina/myTamagotchi"}
                    liveDemoLink={"https://tamagotchi.johnfarina.co"}
                />
                <ProjectCard
                    title="Pocket Calculator"
                    subtext="A calulcator built in react, and styled to resemble a Pocket Operator."
                    imageAlt="A calculator that looks like a pocket operator"
                    image={calculatorImage}
                    readmeIntro={
                        "This is a react built calculator using state for updating, Run simple commands like a real non graphing calculator"
                    }
                    githubLink={"https://github.com/john-farina/react-calculator"}
                    liveDemoLink={"https://pocket-calculator.johnfarina.co"}
                />
            </>
        </CardContainer>
    );
}

export default ProjectsCard;
