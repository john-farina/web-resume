import { Link } from 'react-router-dom';
import { githubIcon } from '../../../../../../static';
import './ExpandedProject.scss';

interface Props {
    samePageLink?: boolean;
    liveDemoLink: string;
    title: string;
    image: string;
    imageAlt: string;
    readmeIntro: string;
    githubLink?: string;
}

function ExpandedProject({
    samePageLink = false,
    liveDemoLink,
    title,
    image,
    imageAlt,
    readmeIntro,
    githubLink
}: Props) {
    function gitHubLogoRender() {
        if (githubLink) {
            return (
                <a href={githubLink} target="_blank" rel="noreferrer">
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
        <div className="projectInformation">
            <div className="projectTop">
                {gitHubLogoRender()}
                {!samePageLink ?
                    (<a
                        href={liveDemoLink}
                        target={
                            !samePageLink ? "_blank" : "_self"
                        }
                        rel="noreferrer"
                        onClick={() => {
                            //   gaEventTracker(`${title}: WEBSITE CLICK`);
                        }}
                    >
                        <p className="projectTitle">{title}</p>
                    </a>)
                    :
                    (<Link className="projectTitle" to={liveDemoLink}>
                        {title}
                    </Link>)
                }
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
    )
}

export default ExpandedProject;