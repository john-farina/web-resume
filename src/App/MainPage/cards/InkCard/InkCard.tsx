import Iframe from "react-iframe";
import { CardContainer } from "../components";
import "./InkCard.scss";
import { useRef } from "react";
import { spriteTeen2 } from "../../../../static";

function InkCard(): React.ReactElement {
    const lilGuyRef = useRef<HTMLDivElement>(null);

    setInterval(() => {
        const randomNumOutOf5 = Math.floor(Math.random() * 5);

        if (lilGuyRef.current) {
            let transforms = [];

            if (randomNumOutOf5 === 2) {
                console.log("Scaling 1");
                transforms.push('scaleX(-1)');
            }

            lilGuyRef.current.style.transform = transforms.join(' ');
        }
    }, 1000);

    setInterval(() => {
        const maxRightWidth = 180;
        const randomRight = Math.floor(Math.random() * maxRightWidth);

        const randomNumOutOf5 = Math.floor(Math.random() * 17);
        const canMove = randomNumOutOf5 === 2;

        if (lilGuyRef.current && canMove) {
            lilGuyRef.current.style.marginLeft = `${randomRight}px`;
            console.log("Moving Guy");
        }
    }, 400);


    return (
        <CardContainer title="Ink Companions" pixelFont>
            <div className="inkCard">
                <div ref={lilGuyRef} className="lilGuy">
                    <img src={spriteTeen2} alt="lilGuy" />
                </div>
                <p>This is a game I’ve been working on for a while now, getting it to a good point for a pre-alpha release. Feel free to read more about this game from my blog below!</p>
                <div className="iframeContainer">
                    <div className="linkContainer">
                        <a href="https://blog.inkcompanions.com">Go To Blog</a>
                    </div>
                    <Iframe
                        url="https://blog.inkcompanions.com/12-2024/what-is-ink-companions/"
                        width="100%"
                        height="350px"
                        className="blog-iframe"
                        display="block"
                        position="relative"
                    />
                </div>
            </div>
        </CardContainer>
    )
}

export default InkCard;