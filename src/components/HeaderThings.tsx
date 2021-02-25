import React from 'react';
import { Link } from "gatsby"
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";

interface Props {
}

const HeaderThings: React.FC<Props> = () => {

    return (
        <div className="Things">
            <Link to="/projects">
                <HeaderButton Name="projects" />
            </Link>
            <Link to="/about">
                <HeaderButton Name="about" />
            </Link>
            <Link to="/backwash">
                <HeaderButton Name="backwash" />
            </Link>

        </div>
    )
}

export default HeaderThings