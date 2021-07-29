import React from 'react'

export const EmbedSC: React.FC<any> = () => {
    return (
        <>
            <h1 className="soundcloud-text"> [ latest release🐶 ] </h1>
            <iframe
                width="100%"
                height="166"
                scrolling="no"
                allow="autoplay"
                className="soundcloud"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1035796984&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>

            <h1 className="soundcloud-rec-text"> [ my recommend tracks😑 ] </h1>

            <iframe
                width="100%"
                height="450"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1151736973&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
        </>
    )
}

export default EmbedSC