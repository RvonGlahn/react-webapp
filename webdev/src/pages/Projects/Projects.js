import React from "react";
import PageContent from "../../components/PageContent";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Projects() {
    return (
        <>
            <PageContent {...homeObjOne} />
            <PageContent {...homeObjTwo} />
            <PageContent {...homeObjThree} />
        </>
    );
}

export default Projects;
