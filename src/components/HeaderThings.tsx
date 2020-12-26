import React from 'react';
import { Link } from "gatsby"
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

type Props = {

}
const HeaderThings = (props) => {

    return (
        <div className="Things">
            <Link to="/projects">
                <HeaderButton Name="projects" />
            </Link>
            <Link to="/about">
                <HeaderButton Name="about" />
            </Link>
            <Link to="/library">
                <HeaderButton Name="library" />
            </Link>

        </div>
    )
}

export default HeaderThings