import { useState } from "react";
import "./ProjectCard.scss";

import MinimizedProject from "./MinimizedProject";
import ExpandedProject from "./ExpandedProject";

interface Props {
    title: string;
    subtext: string;
    image: string;
    imageAlt: string;
    githubLink: string | null;
    liveDemoLink: string;
    readmeIntro: string;
    samePageLink?: boolean;
}

function ProjectCard({
    title,
    subtext,
    image,
    imageAlt,
    githubLink,
    liveDemoLink,
    readmeIntro,
    samePageLink = false,
}: Props) {
    const [moreInfoOpen, setMoreInfoOpen] = useState(false);

    return (
        <div className="projectContainer">
            <div className="newProjectContainer">
                {!moreInfoOpen ? (
                    <MinimizedProject title={title} subtext={subtext} liveDemoLink={liveDemoLink} samePageLink={samePageLink} />
                ) : (
                    <ExpandedProject
                        samePageLink={samePageLink}
                        liveDemoLink={liveDemoLink}
                        title={title}
                        image={image}
                        imageAlt={imageAlt}
                        readmeIntro={readmeIntro}
                        githubLink={githubLink || undefined}
                    />
                )}

                <div className="viewMoreBox" onClick={() => {
                    setMoreInfoOpen(!moreInfoOpen);
                }}>
                    <p className="paragraph">{moreInfoOpen ? "Close" : "Read more"}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
