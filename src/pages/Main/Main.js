import React from "react";
import { Landing } from "../../components/Landing/Landing";
import { Information } from "../../components/Information/Informarion";
import { GenderSelection } from "../../components/GenderSelection/GenderSelection";

export const Main = () => {
    return (
        <>
            <Landing />
            <Information />
            <GenderSelection />
        </>
    )
}