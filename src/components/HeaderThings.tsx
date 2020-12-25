import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";


export default function HeaderThings() {
    return (
        <div className="Things">
            <Link to="/library">
                <HeaderButton Name="library" />
            </Link>
            <Link to="/about">
                <HeaderButton Name="about" />
            </Link>
            <Link to="/projects">
                <HeaderButton Name="projects" />
            </Link>
        </div>
    )
}