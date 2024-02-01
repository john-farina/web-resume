import { useEffect, useState } from 'react';
// import './IntroduceCard.scss';
// import resume from '../../../images/darkModeResume.pdf';

function IntroduceCard() {
    let [titleClass, changeTitleClass] = useState(" ");
    let [titleContent, changeTitleContent] = useState("Hello World!");

    function loadDataOnce() {
        changeTitleContent("Hello World!");

        changeTitleClass(" forwardType");

        setTimeout(() => {
            changeTitleClass(" backspaceType");

            setTimeout(() => {
                changeTitleContent("Hello!");

                changeTitleClass(" reType");
            }, 1900);
        }, 2300);
    }

    useEffect(() => {
        loadDataOnce();
    }, []);

    return (
        <section id="card1" className="card">
            <div className="cardContents">
                <h2 id="typeText" className={"header2 firstHeader2 " + titleClass}>
                    {titleContent}
                </h2>
                <p className="paragraph">
                    I am a <b className="paragraph">FullStack Engineer</b> I'm self
                    taught, and went to school for Digital Art
                </p>

                <p className="introBtns">
                    <a
                        // href={resume}
                        target="_blank"
                        rel="noreferrer"
                        className="introButton"
                        // onClick={() => gaEventTracker("Resume Btn")}
                    >
                        resume
                    </a>{" "}
                    •{" "}
                    <a
                        href="mailto: johnfarina8@gmail.com"
                        className="introButton"
                        // onClick={() => gaEventTracker("Email Btn")}
                    >
                        email
                    </a>{" "}
                    •{" "}
                    <a
                        href="https://github.com/john-farina"
                        target="_blank"
                        rel="noreferrer"
                        className="introButton"
                        // onClick={() => gaEventTracker("Github Btn")}
                    >
                        github
                    </a>
                </p>
            </div>
        </section>
    );
}

export default IntroduceCard;