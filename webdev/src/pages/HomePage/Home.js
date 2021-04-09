import React from "react";
import PageContent from "../../components/PageContent";
import { homeObjOne } from "./Data";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <PageContent {...homeObjOne} />
        </>
    );
}

export default Home;
