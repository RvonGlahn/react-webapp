import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import MarkDownView from '../../components/MarkDown/MarkDownView';
import { webapp } from './articles/webapp.js';
import { cloud } from './articles/cloud';
import { machine } from './articles/machine_learning';

import TextCard from '../../components/Text/Card';

const MyContainer = styled(Container)`
    padding: 2em;
`;

const StyledRow = styled.div`
    padding: 2em;
`;

const articles = [webapp, cloud, machine];

function Blog() {
    const [loadMD, setloadMD] = useState(false);
    const [content, setContent] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function toggleMarkDown(new_content) {
        setContent(new_content);

        if (loadMD) {
            setloadMD(false);
        } else {
            setloadMD(true);
        }
    }

    return (
        <div>
            {loadMD ? (
                <MarkDownView content={content} clickEvent={() => toggleMarkDown('')}></MarkDownView>
            ) : (
                <MyContainer fluid="xl">
                    {articles.map((article, id) => (
                        <StyledRow key={id}>
                            <TextCard text={article.summary} title={article.title} clickEvent={() => toggleMarkDown(article.content)}></TextCard>
                        </StyledRow>
                    ))}
                </MyContainer>
            )}
        </div>
    );
}

export default Blog;
