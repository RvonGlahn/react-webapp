import React from 'react';
import PageContent from '../../components/PageContent';
import { BattleSnake, PhotoSort, FIFA, WebApp } from './Data';
import { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageContent {...WebApp} />
            <hr></hr>
            <PageContent {...FIFA} />
            <hr></hr>
            <PageContent {...PhotoSort} />
            <hr></hr>
            <PageContent {...BattleSnake} />
        </>
    );
}

export default Projects;
