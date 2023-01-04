import React from 'react';
import PageContent from '../../components/PageContent';
import { homePage } from './Data';
import { useEffect } from 'react';
import TextField from '../../components/Text/TextField';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = 'About Me';

    const description = `
        I am Rasmus a Software Developer based in Berlin. I work as a Cloud Computing Engineer. My interests range from
        Machine Learning and Software Engineering topics to Web Developement and Cloud Computing.`;

    const subtitle = 'Skills';

    const itemsList = [
        ['Python', 'C++', 'JavaScript + React'],
        ['Data Engineering', 'Machine + Reinforcement Learning', 'Microsoft Azure'],
    ];

    return (
        <>
            <PageContent {...homePage} />
            <TextField title={title} text={description} subtitle={subtitle} items={itemsList} />
        </>
    );
}

export default Home;
