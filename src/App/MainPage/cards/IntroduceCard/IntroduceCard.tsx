import { useCallback, useEffect, useState } from 'react';
import CardContainer from '../components/CardContainer';
import HeaderButton from './HeaderButton';
import './IntroduceCard.scss';
import { resume } from '../../../../static';

function Dot() {
    return (
        <span className="dot">
            {" "}
            •
            {" "}
        </span>
    )
}

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
    }, [loadDataOnce]);

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

                <div className="introduceContentContainer">
                    <p className="paragraph">
                        I am a <b className="paragraph">full-stack engineer</b>. I'm self-taught, 
                        and went to school for Digital Art.
                    </p>

                    <div className="introBtns">
                        <HeaderButton
                            href={resume}
                        >
                            resume
                        </HeaderButton>
                        <Dot />
                        <HeaderButton
                            href="mailto:johnfarina8@gmail.com"
                        >
                            email
                        </HeaderButton>
                        <Dot />
                        <HeaderButton
                            href="https://github.com/john-farina"
                        >
                            github
                        </HeaderButton>
                        <Dot />
                        <HeaderButton
                            href="https://www.linkedin.com/in/john-farina8/"
                        >
                            linkedin
                        </HeaderButton>
                    </div>
                </div>
            </>
        </CardContainer>
    );
}

export default IntroduceCard;