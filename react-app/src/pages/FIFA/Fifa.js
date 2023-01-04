import React from 'react';
import InputForm from '../../components/FIFASearch/InputForm';
import { useEffect } from 'react';

function Fifa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <InputForm />;
}

export default Fifa;
