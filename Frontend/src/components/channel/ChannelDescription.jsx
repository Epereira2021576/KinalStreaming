import { useFollowChannel, useUserDetails } from "../../shared/hooks";

const FollowButton = ( { channelId, getChannels } ) => {
    const { followChannel } = useFollowChannel()

    const handleFollowChannel = () => {
        followChannel( channelId, getChannels )
    }

    return (
        <button onClick={handleFollowChannel} className="channel-follow-button">
            Follow Channel
        </button>
    )
}

export const ChannelDescription = ( {
    username,
    title,
    description,
    channelId,
    getChannels
} ) => {
    const { isLogged } = useUserDetails()

    return (
        <div className="channel-description-container">
            <span className="channel-description-title">
                {username}
                <span>
                    {isLogged && <FollowButton channelId={channelId} getChannels={getChannels} />}
                </span>
            </span>
            <span className="channel-description-title">
                {title}
                <div className="channel-description-box">
                    <span className="channel-description">
                        {description}
                    </span>
                </div>
            </span>
        </div>
    )
}
