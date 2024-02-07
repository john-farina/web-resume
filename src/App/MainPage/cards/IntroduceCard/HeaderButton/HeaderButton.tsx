import './HeaderButton.scss';

interface Props {
    href: string;
    children: string;
}

function HeaderButton({ href, children }: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="button"
        >
            {children}
        </a>
    )
}

export default HeaderButton;