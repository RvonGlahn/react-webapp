import React from 'react';
import PageContent from '../../components/PageContent';
import Input from '../../components/FIFASearch/Input';
import { homeObjOne } from './Data';
import { useEffect } from 'react';

function Fifa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Input />
            <PageContent {...homeObjOne} />
        </>
    );
}

export default Fifa;
