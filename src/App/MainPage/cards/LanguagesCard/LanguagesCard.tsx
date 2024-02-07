import './LanguagesCard.scss';
import CardContainer from "../components/CardContainer";
import LanguageIcon from "./LanguageIcon";
import {
    sassIcon,
    TypescriptIcon,
    PrismaIcon,
    GraphQLIcon,
    railsLogo,
    rubyLogo,
    nextJsIcon,
    MuiIcon,
    tailwindIcon
} from "../../../../static";

function LanguagesCard() {
    return (
        <CardContainer title="Languages, Frameworks, & Libraries">
            <div className="flex-grid">
                <LanguageIcon
                    image={null}
                    iconClass="fa-brands fa-html5"
                    placeholder="<HTML></HTML>"
                />
                <LanguageIcon
                    image={null}
                    iconClass="fa-brands fa-css3-alt"
                    placeholder="CSS:100%;"
                />
                <LanguageIcon
                    image={null}
                    iconClass="fa-brands fa-js-square"
                    placeholder="JavaScript;"
                />
                <LanguageIcon
                    iconClass={null}
                    image={rubyLogo}
                    classes="ruby"
                    placeholder="# ruby"
                />
                <LanguageIcon
                    image={null}
                    iconClass="fa-brands fa-react"
                    placeholder=" < React />"
                />

                <LanguageIcon
                    image={railsLogo}
                    iconClass={null}
                    classes="rails"
                    placeholder="<%= ruby_on_rails %>"
                />
                <LanguageIcon
                    iconClass={null}
                    image={TypescriptIcon}
                    classes="typescript"
                    placeholder="type { TypeScript }"
                />

                <LanguageIcon
                    iconClass={null}
                    image={nextJsIcon}
                    classes="nextJs"
                    placeholder="Next JS"
                />
                <LanguageIcon
                    iconClass={null}
                    image={PrismaIcon}
                    classes="prisma"
                    placeholder="await prisma.interviewer.accept"
                />
                <LanguageIcon
                    iconClass={null}
                    image={GraphQLIcon}
                    classes="graphql"
                    placeholder="query { GraphQL }"
                />
                <LanguageIcon
                    iconClass={null}
                    image={sassIcon}
                    classes="sass"
                    placeholder="$sass"
                />
                <LanguageIcon
                    image={MuiIcon}
                    iconClass={null}
                    classes="mui"
                    placeholder={`<MaterialUI size="small">`}
                />
                <LanguageIcon
                    image={tailwindIcon}
                    iconClass={null}
                    classes="tailwind"
                    placeholder='"tailwind-logo w-60"'
                />
            </div>
        </CardContainer>
    );
}

export default LanguagesCard;