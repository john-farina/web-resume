// import './LanguagesCard.scss';
// import railsLogo from "../img/rails.png";
// import sassIcon from "../img/sass.png";
// import rubyLogo from "../img/ruby.png";
// import tailwindIcon from "../img/Tailwind.png";
// import nextJsIcon from "../img/nextJsIcon.png";
// import MuiIcon from "../img/MuiIcon.png";
// import PrismaIcon from "../img/PrismaIcon.png";
// import TypescriptIcon from "../img/TypescriptIcon.png";
// import GraphQLIcon from "../img/GraphQLIcon.png";

import LanguageIcon from "./LanguageIcon";

function LanguagesCard() {
    return (
        <div id="card4" className="card">
            <div className="cardBack cardBack4"></div>

            <div className="cardContents">
                <h2 className="header2">Languages, Frameworks, & Libraries:</h2>

                <div id="icon-container">
                    <div className="icon-row">
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
                            image="temp"
                            iconClass={null}
                            // image={rubyLogo}
                            classes="ruby"
                            placeholder="# ruby"
                        />
                    </div>

                    <div className="icon-row">
                        <LanguageIcon
                            image={null}
                            iconClass="fa-brands fa-react"
                            placeholder=" < React />"
                        />

                        <LanguageIcon
                            // image={railsLogo}
                            image="temp"
                            iconClass={null}
                            classes="rails"
                            placeholder="<%= ruby_on_rails %>"
                        />
                        <LanguageIcon
                            image="temp"
                            iconClass={null}
                            // image={TypescriptIcon}
                            classes="typescript"
                            placeholder="type { TypeScript }"
                        />

                        <LanguageIcon
                            image="temp"
                            iconClass={null}
                            // image={nextJsIcon}
                            classes="nextJs"
                            placeholder="Next JS"
                        />
                    </div>

                    <div className="icon-row">
                        <LanguageIcon
                            image="temp"
                            iconClass={null}
                            // image={PrismaIcon}
                            classes="prisma"
                            placeholder="prisma.interviewer.accept"
                        />

                        <LanguageIcon
                            image="temp"
                            iconClass={null}
                            // image={GraphQLIcon}
                            classes="graphql"
                            placeholder="query { GraphQL }"
                        />

                        <LanguageIcon
                            image="temp"
                            iconClass={null}
                            // image={sassIcon}
                            classes="sass"
                            placeholder="$sass"
                        />

                        <LanguageIcon
                            image="temp"
                            // image={MuiIcon}
                            iconClass={null}
                            classes="mui"
                            placeholder={`<MaterialUI size="small">`}
                        />
                    </div>

                    <div className="icon-row">
                        <LanguageIcon
                            image="temp"
                            // image={tailwindIcon}
                            iconClass={null}
                            classes="tailwind"
                            placeholder='"tailwind-logo w-60"'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguagesCard;