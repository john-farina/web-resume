import { abletonIcon, auditionIcon, blenderIcon, figmaIcon, photoshopIcon, premiereIcon, unityIcon } from "../../../../static";
import { CardContainer, LanguageIcon } from "../components";
import './OtherSkillsCard.scss';

function OtherSkillsCard() {
    return (
        <CardContainer title="Other Skills">
            <div className="flex-grid">
                <LanguageIcon
                    iconClass={null}
                    image={figmaIcon}
                    classes="figma"
                    placeholder="Figma"
                />
                <LanguageIcon
                    iconClass={null}
                    image={unityIcon}
                    classes="unity"
                    placeholder="Unity"
                />
                       <LanguageIcon
                    iconClass={null}
                    image={blenderIcon}
                    classes="blender"
                    placeholder="Blender"
                />
                <LanguageIcon
                    iconClass={null}
                    image={photoshopIcon}
                    classes="photoshop"
                    placeholder="Photoshop"
                />
                <LanguageIcon
                    iconClass={null}
                    image={auditionIcon}
                    classes="audition"
                    placeholder="Audition"
                />
                <LanguageIcon
                    iconClass={null}
                    image={premiereIcon}
                    classes="premiere"
                    placeholder="Premiere"
                />
                <LanguageIcon
                    iconClass={null}
                    image={abletonIcon}
                    classes="ableton"
                    placeholder="Ableton"
                />
            </div>
        </CardContainer>
    )
}

export default OtherSkillsCard;