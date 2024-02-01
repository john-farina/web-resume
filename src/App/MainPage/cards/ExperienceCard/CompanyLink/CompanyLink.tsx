interface Props {
    title: string;
    visibleLink: string;
    link: string;
}

const CompanyLink = ({ title, visibleLink, link }: Props) => {
    return (
        <p className="paragraph">
            {title} -{" "}
            <a
                className="companyLink"
                target="_blank"
                rel="noreferrer"
                href={link}
            >
                {visibleLink}
            </a>
        </p>
    )
}

export default CompanyLink;