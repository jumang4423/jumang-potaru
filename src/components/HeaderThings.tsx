import React from 'react';
import HeaderButton from "@/components/HeaderButton"
import "@/styles/component/HeaderThings.scss";


export default function HeaderThings() {
    return (
        <div className="Things">
            <HeaderButton Name="library" />
            <HeaderButton Name="about" />
            <HeaderButton Name="projects" />
        </div>
    )
}