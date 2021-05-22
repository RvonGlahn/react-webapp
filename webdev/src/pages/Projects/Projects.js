import React from 'react';
import PageContent from '../../components/PageContent';
import { homeObjOne, homeObjTwo, homeObjThree, objFIFA } from './Data';
import { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageContent {...objFIFA} />
            <PageContent {...homeObjOne} />
            <PageContent {...homeObjTwo} />
            <PageContent {...homeObjThree} />
        </>
    );
}

export default Projects;
