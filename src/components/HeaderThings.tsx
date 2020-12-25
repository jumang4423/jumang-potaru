import React from 'react';
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

type Props = {

}
const HeaderThings: React.FC<Props> = () => {

    return (
        <div className="Things">
            <a href="/library">
                <HeaderButton Name="library" />
            </a>
            <a href="/about">
                <HeaderButton Name="about" />
            </a>
            <a href="/projects">
                <HeaderButton Name="projects" />
            </a>
        </div>
    )
}

export default HeaderThings