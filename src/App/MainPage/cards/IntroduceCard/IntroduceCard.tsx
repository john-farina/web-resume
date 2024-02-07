import { useCallback, useEffect, useState } from 'react';
import CardContainer from '../components/CardContainer';
import HeaderButton from './HeaderButton';
import './IntroduceCard.scss';
const resume = '/images/darkModeResume.pdf';

function IntroduceCard() {
    let [titleClass, changeTitleClass] = useState(" ");
    let [titleContent, changeTitleContent] = useState("Hello World!");

    const loadDataOnce = useCallback((): void => {
        changeTitleContent("Hello World!");
        changeTitleClass(" forwardType");

        setTimeout(() => {
            changeTitleClass(" backspaceType");

            setTimeout(() => {
                changeTitleContent("Hello!");

                changeTitleClass(" reType");
            }, 1900);
        }, 2300);
    }, [])

    useEffect(() => {
        loadDataOnce();
    }, []);

    return (
        <CardContainer>
            <>
                <h2 id="typeText" className={"header2 firstHeader2 " + titleClass}>
                    {titleContent}
                </h2>
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
                    {" "}•{" "}
                    <HeaderButton
                        href="mailto: johnfarina8@gmail.com"
                    >
                        email
                    </HeaderButton>
                    {" "}•{" "}
                    <HeaderButton
                        href="https://github.com/john-farina"
                    >
                        github
                    </HeaderButton>
                </p>
            </>
        </CardContainer>
    );
}

export default IntroduceCard;