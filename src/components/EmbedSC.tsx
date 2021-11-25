import React from 'react'
import "@/styles/component/embedsc.scss"

export const EmbedSC: React.FC<any> = () => {
    return (
        <>
            {/* <h3 className="soundcloud-text unko"> latest release🐶 </h3>
            <iframe
                width="100%"
                height="166"
                scrolling="no"
                allow="autoplay"
                className="soundcloud"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1035796984&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe> */}

            <h3 className="soundcloud-text unko"> my recommend tracks😑 </h3>

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