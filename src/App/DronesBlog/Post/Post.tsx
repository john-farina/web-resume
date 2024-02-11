import './Post.scss';

interface Props {
    date: string;
    title: string;
    children: React.ReactNode;
}

function Post({ date, title, children }: Props) {
    return (
        <div className="informationContainer">
            <p className="header3 date">{date}</p>
            <p className="header2">{title}</p>
            {children}
        </div>
    );
}

export default Post;