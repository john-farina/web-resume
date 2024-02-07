import { useRef } from "react";
import "./ProjectCard.scss";

const githubIcon = "/images/gtihub.png";

interface Props {
    title: string;
    subtext: string;
    image: string;
    imageAlt: string;
    githubLink: string | null;
    liveDemoLink: string;
    readmeIntro: string;
}

function ProjectCard({
    title,
    subtext,
    image,
    imageAlt,
    githubLink,
    liveDemoLink,
    readmeIntro,
}: Props) {
    const dropDown = useRef<HTMLDivElement>(null);

    function CardHover() {
        if (!dropDown.current) return;

        dropDown.current.style.display = "flex";
    }

    function CardLeave() {
        if (!dropDown.current) return;

        dropDown.current.style.display = "none";
    }

    function gitHubLogoRender() {
        if (githubLink) {
            return (
                <a href={githubLink} target="_blank">
                    <div
                        className="gitHubLogo"
                        onClick={() => {
                            //   gaEventTracker(`${title}: GITHUB CLICK`);
                        }}
                    >
                        <img
                            className="projectIcon"
                            src={githubIcon}
                            alt=""
                        />
                    </div>
                </a>
            );
        } else {
            return;
        }
    }

    return (
        <div className="projectContainer">
            <p className="paragraph">
                <a
                    onMouseOver={() => {
                        CardHover();
                        // gaEventTracker(`${title}: HOVER`);
                    }}
                    onMouseLeave={() => {
                        CardLeave();
                    }}
                    onMouseDown={() => {
                        CardHover();
                    }}
                    onTouchStart={() => {
                        CardHover();
                    }}
                    className="textButton"
                >
                    {title}
                </a>
                - {subtext}
            </p>

            <div
                ref={dropDown}
                className="dropDown"
                onMouseOver={() => {
                    CardHover();
                }}
                onMouseLeave={() => {
                    CardLeave();
                }}
            >
                <div className="linkage"></div>
                <div className="top">
                    {gitHubLogoRender()}
                    <a
                        href={liveDemoLink}
                        onClick={() => {
                            //   gaEventTracker(`${title}: WEBSITE CLICK`);
                        }}
                    >
                        <p className="projectTitle">{title}</p>
                    </a>
                </div>

                <div className="bottom">
                    <div className="imageContainer">
                        <img className="projectImage" src={image} alt={imageAlt} />
                    </div>

                    <div
                        className="projTextContainer"
                        onScroll={() => {
                            //   gaEventTracker(`${title}: README SCROLL`);
                        }}
                    >
                        <div className="readme">{readmeIntro}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
