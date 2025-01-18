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
        <CardContainer title="Past Projects">
            <>
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
