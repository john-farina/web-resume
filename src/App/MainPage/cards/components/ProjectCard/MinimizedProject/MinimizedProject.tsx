import { Link } from 'react-router-dom';
import './MinimizedProject.scss';

interface Props {
    title: string;
    subtext: string;
    liveDemoLink: string;
    samePageLink?: boolean;
}

function MinimizedProject({ title, subtext, liveDemoLink, samePageLink = false }: Props) {
    return (
        <div className="minimizedContainer">
            <div className="headerLeft">
                {!samePageLink ? (

                    <button
                        onClick={() => {
                            window.open(liveDemoLink, "_blank");
                        }}
                        className="textButton"
                    >
                        {title}
                    </button>
                ) : (
                    <Link to={liveDemoLink} className="textButton">
                        {title}
                    </Link>
                )}
            </div>
            
            <div className="breakParagraph" />
   
            <div className="headerRight">
                <p className="paragraph">
                    {subtext}
                </p>
            </div>
        </div>

    )
}

export default MinimizedProject;