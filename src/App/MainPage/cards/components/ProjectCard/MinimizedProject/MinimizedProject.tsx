import { Link } from 'react-router-dom';
import './MinimizedProject.scss';

interface Props {
    title: string;
    subtext: string;
    liveDemoLink: string;
    expandProject: () => void;
}

function MinimizedProject({ title, subtext, liveDemoLink, expandProject }: Props) {
    return (
        <div className="minimizedCont">
            <div
                className="left"
                onClick={() => {
                    window.open(liveDemoLink, "_blank");
                }}
            >
                <p>{title}</p>
            </div>

            <div
                className="right"
                onClick={() => {
                    expandProject();
                }}
            >
                <p>{subtext}</p>
            </div>
        </div>

    )
}

export default MinimizedProject;