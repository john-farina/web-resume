import { useCallback, useEffect, useState } from 'react';
import CardContainer from '../components/CardContainer';
import HeaderButton from './HeaderButton';
import './IntroduceCard.scss';
const resume = '/images/darkModeResume.pdf';

function IntroduceCard() {
    const [titleClass, changeTitleClass] = useState(" ");
    const [titleContent, changeTitleContent] = useState("Hello World!");
    const [hovered, setHovered] = useState(false);

    const loadDataOnce = useCallback((): void => {
        changeTitleContent("Hello World!");
        changeTitleClass("forwardType");

        setTimeout(() => {
            changeTitleClass("backspaceType");

            setTimeout(() => {
                changeTitleContent("Hello!");

                changeTitleClass("reType");
            }, 1900);
        }, 2300);
    }, [])

    useEffect(() => {
        loadDataOnce();
    }, []);

    const colorClass = hovered ? "blue" : "red";

    return (
        <CardContainer>
            <>
                <h2
                    id="typeText"
                    className={`header2 firstHeader2 ${titleClass} ${colorClass}`}

                    onMouseLeave={() => {
                        setHovered(!hovered);
                    }}
                >
                    {titleContent}
                </h2>
                
                <div className="contentContainer">
                    <p className="paragraph">
                        I am a <b className="paragraph">FullStack Engineer</b> I'm self
                        taught, and went to school for Digital Art
                    </p>

                    <p className="introBtns">
                        <HeaderButton
                            href={resume}
                        >
                            resume
                        </HeaderButton>
                        <span className="dot">
                            {" "}
                            •
                            {" "}
                        </span>
                        <HeaderButton
                            href="mailto: johnfarina8@gmail.com"
                        >
                            email
                        </HeaderButton>
                        <span className="dot">
                            {" "}
                            •
                            {" "}
                        </span>
                        <HeaderButton
                            href="https://github.com/john-farina"
                        >
                            github
                        </HeaderButton>
                    </p>
                </div>
            </>
        </CardContainer>
    );
}

export default IntroduceCard;