import React from 'react';
import Input from '../../components/FIFASearch/Input';
import { useEffect } from 'react';

function Fifa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Input />
        </>
    );
}

export default Fifa;
