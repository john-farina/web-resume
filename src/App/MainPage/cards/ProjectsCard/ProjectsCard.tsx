import { ProjectCard } from "../components";
import CardContainer from "../components/CardContainer";

const soundscapeImage = "/images/projects/soundscapes-intro.gif";
const snakeImage = "/images/projects/playing-snake-2.gif";
const tamagotchiImage = "/images/projects/Tamgotchi-Intro.gif";
const calculatorImage = "/images/projects/pocketCalc.gif";
const zoltarImage = "/images/projects/ZoltarFirst.gif";
const magicBallImage = "/images/projects/8Ball-Opening (1).gif";
const etchaImage = "/images/projects/EtchaDrawReset.gif";
const ticTacImage = "/images/projects/Win-TicTacToe.gif";


function ProjectsCard() {
    return (
        <CardContainer>
            <>
                <h2 className="header2">Projects</h2>
                
                <h3 className="header3 ">Full Stack:</h3>

                <ul>
                    <li>
                        <ProjectCard
                            title="[soundScapes]"
                            subtext="A background noise website made with Rails."
                            imageAlt="The homepage of soundscapes with a scrolling animation"
                            image={soundscapeImage}
                            readmeIntro="[soundScapes] is a platform for users to share their favorite sounds for Studying, Sleeping, etc. with the community. Users can create, read, update, and delete Soundscapes, as follow other users, comment on posts, like posts, and create posts."
                            githubLink={"https://github.com/john-farina/sleepScapes"}
                            liveDemoLink={"https://soundscapes.johnfarina.co"}
                        />
                    </li>

                    <li>
                        <ProjectCard
                            title="Snake"
                            subtext="This is a remake of Snake built in React, using rails backend to save highscores"
                            imageAlt="Playing a game of snake untill they lose"
                            image={snakeImage}
                            readmeIntro={
                                "This is a web recreation of the classic snake game, but when you get a highscore you can save it for the world to see. Using React inside of Rails."
                            }
                            githubLink={"https://github.com/john-farina/snake-port"}
                            liveDemoLink={"https://snake.johnfarina.co"}
                        />
                    </li>
                </ul>

                <h3 className="header3">Front End:</h3>

                <ul>
                    <li>
                        <ProjectCard
                            title="Tamagotchi"
                            subtext="A clone of the classic Tamagotchi hand-held game, built with
          vanilla JavaScript"
                            imageAlt="A user playing with the tamagotchi and showing off the menus"
                            image={tamagotchiImage}
                            readmeIntro={
                                "This Tamagotchi project is a digital recreation of the classic virtual pet. Built with Vanilla JavaScript and CSS, I tried to capture the essence of the original while adding to the web experience. With this project, you can take care of your Tamagotchi by feeding, playing, and healing it. Get ready to relive the tramatic experiences of taking care of the Tamagotchi but all on the web!"
                            }
                            githubLink={"https://github.com/john-farina/myTamagotchi"}
                            liveDemoLink={"https://tamagotchi.johnfarina.co"}
                        />
                    </li>

                    <li>
                        <ProjectCard
                            title="Pocket Calculator"
                            subtext="A calulcator built in react, and styled to resemble a Pocket Operator"
                            imageAlt="A calculator that looks like a pocket operator"
                            image={calculatorImage}
                            readmeIntro={
                                "This is a react built calculator using state for updating, Run simple commands like a real non graphing calculator"
                            }
                            githubLink={"https://github.com/john-farina/react-calculator"}
                            liveDemoLink={"https://pocket-calculator.johnfarina.co"}
                        />
                    </li>

                    <li>
                        <ProjectCard
                            title="Zoltar"
                            subtext="A web creation of Zoltar to give you fortunes in the style of a old fortune teller machine."
                            imageAlt="A website of zoltar with the lamps slowly fading in and out"
                            image={zoltarImage}
                            readmeIntro={
                                'For this project i used Vanilla JS so i could fully master and understand what it has to offer, I created this based off of the real Fortune Teller machines you would find in a arcade. Using Zoltar which originated in the movie "Big" as the face of the project.'
                            }
                            githubLink={"https://github.com/john-farina/Zoltar"}
                            liveDemoLink={"https://zoltar.johnfarina.co"}
                        />
                    </li>

                    <li>
                        <ProjectCard
                            title="Magic 8 Ball"
                            subtext="An online remake of the Magic 8 Ball, built with vanilla
          JavaScript"
                            imageAlt="A magic 8 ball rotating and showing the front. "
                            image={magicBallImage}
                            readmeIntro={
                                "For this project i am using Vanilla JS in an attempt to fully master it, This project is of course based off of a Magic 8 Ball a toy people use to ask yes or no questions. Its a simple enough project but designed more to feel like a actual Magic 8 Ball"
                            }
                            githubLink={"https://github.com/john-farina/Magic8Ball"}
                            liveDemoLink={"https://magic8ball.johnfarina.co"}
                        />
                    </li>

                    <li>
                        <ProjectCard
                            title="Etch-A-Sketch"
                            subtext="A wesbite that resembles a classic etcha sketch allowing you to draw with ur mouse"
                            imageAlt="Someone drawing with their mouse on a etcha sketch styled website"
                            image={etchaImage}
                            readmeIntro={
                                "This project was created with the intention to recreate the feel of using a actual etcha sketch as much as i can on a website. I used Vanilla JS because there was no purpose for a library."
                            }
                            githubLink={"https://github.com/john-farina/etchaSketch"}
                            liveDemoLink={"https://etchasketch.johnfarina.co"}
                        />
                    </li>

                    <li className="lastLi">
                        <ProjectCard
                            title="Tic Tac Toe"
                            subtext="2 player Tic Tac Toe game, built with vanilla JavaScript"
                            imageAlt="a player winning Tic Tac Toe"
                            image={ticTacImage}
                            readmeIntro={
                                "A web Tic Tac Toe game, play against a random bot. but its best to play it two player locally with a friend! "
                            }
                            githubLink={"https://github.com/john-farina/TicTacCode"}
                            liveDemoLink={"https://tictactoe.johnfarina.co"}
                        />
                    </li>
                </ul>
            </>
        </CardContainer>
    );
}

export default ProjectsCard;
