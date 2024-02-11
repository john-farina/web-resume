import ReactPlayer from 'react-player';

interface Props {
    url: string;
}

function VideoPlayer({ url }: Props) {
    return (
        <ReactPlayer
        url={url}
        controls
        class="videoPlayer"
        width={400}
        height="100%"
        config={{
            file: {
                forceVideo: true,
                attributes: {
                    controlsList: 'nodownload'
                }
            },
        }}
    />
    )
}

export default VideoPlayer