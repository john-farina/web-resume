import './LanguagesCard.scss';
import { CardContainer, LanguageIcon } from '../components';
import {
    sassIcon,
    TypescriptIcon,
    PrismaIcon,
    GraphQLIcon,
    railsLogo,
    rubyLogo,
    nextJsIcon,
    MuiIcon,
    tailwindIcon,
    cSharpLogo,
    swiftIcon,
    jekyllIcon,
    shadcnIcon,
    storybookIcon,
    vueIcon
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
                    iconClass={null}
                    image={TypescriptIcon}
                    classes="typescript"
                    placeholder="type { TypeScript }"
                />
                <LanguageIcon
                    image={cSharpLogo}
                    classes="cSharp"
                    placeholder="void C#()"
                    iconClass={null}
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
                    placeholder="Jekyll"
                />
                <LanguageIcon
                    image={vueIcon}
                    iconClass={null}
                    classes="vue"
                    placeholder="Vue"
                />
                <LanguageIcon
                    image={jekyllIcon}
                    iconClass={null}
                    classes="jekyll"
                    placeholder="<%= ruby_on_rails %>"
                />
                <LanguageIcon
                    image={swiftIcon}
                    classes="swift"
                    placeholder="func Swift()"
                    iconClass={null}
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
                {/* STYLES */}
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
                    placeholder={`<MaterialUI size="medium">`}
                />
                <LanguageIcon
                    image={tailwindIcon}
                    iconClass={null}
                    classes="tailwind"
                    placeholder='"tailwind-logo w-60"'
                />
                <LanguageIcon
                    image={shadcnIcon}
                    iconClass={null}
                    classes="shadcn"
                    placeholder={`ShadCN`}
                />
                <LanguageIcon
                    image={storybookIcon}
                    iconClass={null}
                    classes="storybook"
                    placeholder={`Storybook`}
                />
            </div>
        </CardContainer>
    );
}

export default LanguagesCard;